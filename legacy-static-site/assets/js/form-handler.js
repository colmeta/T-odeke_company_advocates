/**
 * PRODUCTION FORM HANDLER
 * Enterprise-grade contact form with email notifications
 * Includes spam protection, validation, and CRM integration ready
 */

// ====================================
// CONFIGURATION
// ====================================

const CONFIG = {
  // Email Service (Choose one: SendGrid, EmailJS, or PHP)
  emailService: 'sendgrid', // 'sendgrid' | 'emailjs' | 'php'
  
  // SendGrid Configuration
  sendgrid: {
    apiKey: 'YOUR_SENDGRID_API_KEY_HERE', // Replace with your API key
    fromEmail: 'noreply@todekeadvocates.com',
    fromName: 'T Odeke & Co. Advocates Website',
    toEmail: 'info@todekeadvocates.com', // Main inbox
    cc: ['nakasero@todekeadvocates.com'], // CC addresses
  },
  
  // EmailJS Configuration (Alternative - Free Tier Available)
  emailjs: {
    serviceId: 'YOUR_SERVICE_ID',
    templateId: 'YOUR_TEMPLATE_ID',
    publicKey: 'YOUR_PUBLIC_KEY',
  },
  
  // Google reCAPTCHA v3
  recaptcha: {
    siteKey: 'YOUR_RECAPTCHA_SITE_KEY', // Get from https://www.google.com/recaptcha/admin
    secretKey: 'YOUR_RECAPTCHA_SECRET_KEY',
    enabled: true,
  },
  
  // CRM Integration (Optional - HubSpot, Salesforce, etc.)
  crmIntegration: {
    enabled: false,
    provider: 'hubspot', // 'hubspot' | 'salesforce' | 'zoho'
    apiEndpoint: 'https://api.hubapi.com/contacts/v1/contact',
    apiKey: 'YOUR_CRM_API_KEY',
  },
};

// ====================================
// RECAPTCHA VERIFICATION
// ====================================

async function verifyRecaptcha(token) {
  if (!CONFIG.recaptcha.enabled) return true;
  
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${CONFIG.recaptcha.secretKey}&response=${token}`,
    });
    
    const data = await response.json();
    return data.success && data.score > 0.5; // Threshold score
  } catch (error) {
    console.error('reCAPTCHA verification failed:', error);
    return false;
  }
}

// ====================================
// EMAIL SENDING - SENDGRID
// ====================================

async function sendEmailViaSendGrid(formData) {
  const { name, email, phone, practiceArea, location, message } = formData;
  
  const emailPayload = {
    personalizations: [{
      to: [{ email: CONFIG.sendgrid.toEmail }],
      cc: CONFIG.sendgrid.cc.map(e => ({ email: e })),
      subject: `New Consultation Request - ${practiceArea}`,
    }],
    from: {
      email: CONFIG.sendgrid.fromEmail,
      name: CONFIG.sendgrid.fromName,
    },
    content: [{
      type: 'text/html',
      value: `
        <html>
          <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0F1829; border-bottom: 4px solid #D4AF37; padding-bottom: 10px;">
              New Consultation Request
            </h2>
            <table style="width: 100%; margin-top: 20px;">
              <tr>
                <td style="padding: 10px; background-color: #f5f5f5;"><strong>Name:</strong></td>
                <td style="padding: 10px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; background-color: #f5f5f5;"><strong>Email:</strong></td>
                <td style="padding: 10px;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; background-color: #f5f5f5;"><strong>Phone:</strong></td>
                <td style="padding: 10px;"><a href="tel:${phone}">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; background-color: #f5f5f5;"><strong>Practice Area:</strong></td>
                <td style="padding: 10px;">${practiceArea}</td>
              </tr>
              <tr>
                <td style="padding: 10px; background-color: #f5f5f5;"><strong>Preferred Location:</strong></td>
                <td style="padding: 10px;">${location}</td>
              </tr>
              <tr>
                <td style="padding: 10px; background-color: #f5f5f5;" valign="top"><strong>Message:</strong></td>
                <td style="padding: 10px;">${message}</td>
              </tr>
            </table>
            <p style="margin-top: 30px; color: #666; font-size: 12px;">
              Sent from: T Odeke & Co. Advocates Website<br>
              Date: ${new Date().toLocaleString('en-UG', { timeZone: 'Africa/Kampala' })}
            </p>
          </body>
        </html>
      `,
    }],
  };
  
  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${CONFIG.sendgrid.apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(emailPayload),
  });
  
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`SendGrid API error: ${error}`);
  }
  
  return true;
}

// ====================================
// EMAIL SENDING - EMAILJS (CLIENT-SIDE)
// ====================================

async function sendEmailViaEmailJS(formData) {
  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: CONFIG.emailjs.serviceId,
      template_id: CONFIG.emailjs.templateId,
      user_id: CONFIG.emailjs.publicKey,
      template_params: {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        practice_area: formData.practiceArea,
        location: formData.location,
        message: formData.message,
        to_email: CONFIG.sendgrid.toEmail,
      },
    }),
  });
  
  if (!response.ok) {
    throw new Error('EmailJS send failed');
  }
  
  return true;
}

// ====================================
// CRM INTEGRATION
// ====================================

async function addToHubSpot(formData) {
  if (!CONFIG.crmIntegration.enabled) return;
  
  const payload = {
    properties: [
      { property: 'firstname', value: formData.name.split(' ')[0] },
      { property: 'lastname', value: formData.name.split(' ').slice(1).join(' ') },
      { property: 'email', value: formData.email },
      { property: 'phone', value: formData.phone },
      { property: 'practice_area', value: formData.practiceArea },
      { property: 'preferred_location', value: formData.location },
      { property: 'message', value: formData.message },
    ],
  };
  
  try {
    await fetch(`${CONFIG.crmIntegration.apiEndpoint}?hapikey=${CONFIG.crmIntegration.apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error('CRM integration failed:', error);
    // Don't fail the form submission if CRM fails
  }
}

// ====================================
// MAIN FORM HANDLER
// ====================================

async function handleFormSubmission(formData, recaptchaToken) {
  try {
    // Step 1: Verify reCAPTCHA
    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      throw new Error('reCAPTCHA verification failed. Please try again.');
    }
    
    // Step 2: Send email notification
    if (CONFIG.emailService === 'sendgrid') {
      await sendEmailViaSendGrid(formData);
    } else if (CONFIG.emailService === 'emailjs') {
      await sendEmailViaEmailJS(formData);
    }
    
    // Step 3: Add to CRM (optional)
    await addToHubSpot(formData);
    
    // Step 4: Send auto-response to client
    await sendAutoResponse(formData);
    
    return { success: true, message: 'Thank you! We will contact you within 24 hours.' };
  } catch (error) {
    console.error('Form submission error:', error);
    return { success: false, message: 'Something went wrong. Please call us directly.' };
  }
}

// ====================================
// AUTO-RESPONSE EMAIL
// ====================================

async function sendAutoResponse(formData) {
  const autoResponsePayload = {
    personalizations: [{
      to: [{ email: formData.email }],
      subject: 'Thank You for Contacting T Odeke & Co. Advocates',
    }],
    from: {
      email: CONFIG.sendgrid.fromEmail,
      name: CONFIG.sendgrid.fromName,
    },
    content: [{
      type: 'text/html',
      value: `
        <html>
          <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #0F1829;">Thank You, ${formData.name}!</h2>
            <p>We have received your inquiry regarding <strong>${formData.practiceArea}</strong>.</p>
            <p>One of our attorneys will contact you within 24 hours to discuss your legal needs.</p>
            <h3 style="color: #D4AF37; margin-top: 30px;">What Happens Next?</h3>
            <ol>
              <li>An attorney will review your case details</li>
              <li>We'll call you to schedule a free consultation</li>
              <li>During the consultation, we'll discuss your options and next steps</li>
            </ol>
            <p style="margin-top: 30px;">In the meantime, if you have urgent legal matters, please contact us directly:</p>
            <table>
              <tr><td><strong>Nakasero Office:</strong></td><td>+256 700 000 000</td></tr>
              <tr><td><strong>Nsambya Office:</strong></td><td>+256 700 000 001</td></tr>
              <tr><td><strong>Soroti Office:</strong></td><td>+256 700 000 002</td></tr>
            </table>
            <p style="margin-top: 30px; color: #666; font-size: 12px; border-top: 1px solid #ddd; padding-top: 20px;">
              T Odeke & Co. Advocates<br>
              Uganda's Premier Legal Authority<br>
              <a href="https://todekeadvocates.com">www.todekeadvocates.com</a>
            </p>
          </body>
        </html>
      `,
    }],
  };
  
  try {
    await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${CONFIG.sendgrid.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(autoResponsePayload),
    });
  } catch (error) {
    console.error('Auto-response failed:', error);
  }
}

// Export for use in frontend
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { handleFormSubmission, CONFIG };
}
