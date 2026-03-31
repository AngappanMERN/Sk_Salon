const twilio = require('twilio');

/**
 * Sends both an SMS and a WhatsApp message using Twilio
 * @param {Object} appointmentData - Data from the newly created appointment
 */
const sendNotification = async (appointmentData) => {
  try {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;

    if (!accountSid || !authToken || !accountSid.startsWith('AC')) {
      console.warn('⚠️ Twilio credentials missing or invalid. Skipping SMS/WhatsApp notifications.');
      return;
    }

    const client = new twilio(accountSid, authToken);

    const { name, service, date, time } = appointmentData;
    
    // Format the date nicely, e.g. "10 April"
    const parsedDate = new Date(date).toLocaleDateString('en-US', { day: 'numeric', month: 'long' });

    // Format the message
    const messageBody = 
`New Appointment Booked:
Name: ${name}
Service: ${service}
Date: ${parsedDate}
Time: ${time}`;

    const managerPhone = process.env.MANAGER_PHONE_NUMBER;
    const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
    const twilioWhatsAppNumber = process.env.TWILIO_WHATSAPP_NUMBER;

    // Send SMS
    if (twilioPhoneNumber) {
        try {
            await client.messages.create({
              body: messageBody,
              from: twilioPhoneNumber, // Your Twilio Phone number
              to: managerPhone        // Manager's Phone number
            });
            console.log('✅ SMS notification sent successfully');
        } catch (smsError) {
            console.error('❌ Failed to send SMS:', smsError.message);
        }
    }

    // Send WhatsApp
    if (twilioWhatsAppNumber) {
        try {
            await client.messages.create({
              body: messageBody,
              from: `whatsapp:${twilioWhatsAppNumber}`, // Your Twilio WhatsApp number
              to: `whatsapp:${managerPhone}`           // Manager's WhatsApp number
            });
            console.log('✅ WhatsApp notification sent successfully');
        } catch (waError) {
            console.error('❌ Failed to send WhatsApp message:', waError.message);
        }
    }
  } catch (error) {
    // We catch and log all errors so it never stops the appointment from saving
    console.error('❌ Notification Service Critical Error:', error.message);
  }
};

module.exports = {
  sendNotification,
};
