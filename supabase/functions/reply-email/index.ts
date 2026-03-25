import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { type, recordId, replyTo, replySubject, replyMessage, adminEmail } = await req.json()

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Get original record
    let originalRecord
    if (type === 'contact') {
      const { data } = await supabase
        .from('contacts')
        .select('*')
        .eq('id', recordId)
        .single()
      originalRecord = data
    } else {
      const { data } = await supabase
        .from('appointments')
        .select('*')
        .eq('id', recordId)
        .single()
      originalRecord = data
    }

    if (!originalRecord) {
      throw new Error('Record not found')
    }

    // Send reply email
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #000; color: #fff; padding: 20px; text-align: center; }
          .content { padding: 30px; background: #f9f9f9; }
          .message-box { background: #fff; padding: 20px; border-left: 4px solid #000; margin: 20px 0; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; border-top: 1px solid #eee; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Reinke AI Automation</h1>
          </div>
          <div class="content">
            <p>Dear ${originalRecord.name},</p>
            <div class="message-box">
              ${replyMessage.replace(/\n/g, '<br>')}
            </div>
            <p>Best regards,<br>${adminEmail}<br>Reinke AI Team</p>
            <p style="font-size: 12px; color: #666; margin-top: 20px;">
              This is a reply to your inquiry from ${new Date(originalRecord.created_at).toLocaleString()}
            </p>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} Reinke AI Automation. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Reinke AI <noreply@reinke-ai.de>',
        to: [replyTo],
        replyTo: adminEmail,
        subject: replySubject,
        html: emailHtml,
      }),
    })

    if (!res.ok) {
      const errorText = await res.text()
      console.error('Resend API error:', errorText)
      throw new Error('Failed to send email')
    }

    // Update record status
    if (type === 'contact') {
      await supabase
        .from('contacts')
        .update({ status: 'replied' })
        .eq('id', recordId)
    } else {
      await supabase
        .from('appointments')
        .update({ status: 'replied' })
        .eq('id', recordId)
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error in reply-email:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})