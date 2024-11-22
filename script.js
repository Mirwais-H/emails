document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('emailForm').addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Retrieve form values
      const toEmail = document.getElementById('to').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
  
      // Initialize EmailJS (using your user ID)
      emailjs.init('ROUM5bYPN7ZSSr-ok'); // Make sure you have the correct public key
  
      // Prepare email parameters (matching placeholders in template)
      const emailParams = {
        to_name: toEmail,  // Corresponds to {{to_name}} in the template
        from_name: subject,  // Corresponds to {{from_name}} in the template
        message: message,  // Corresponds to {{message}} in the template
      };
  
      // Send email using EmailJS
      emailjs.send('service_qk9ss3u', 'template_sz46gwt', emailParams)
        .then(() => {
          document.getElementById('status').innerText = 'Email sent successfully!';
        })
        .catch((error) => {
          document.getElementById('status').innerText = 'Failed to send email. Please try again.';
          console.error('Error:', error); // Log the entire error object for better debugging
        });
    });
  });
  