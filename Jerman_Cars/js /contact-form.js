document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var firstName = document.getElementsByName('first_name')[0].value;
    var lastName = document.getElementsByName('last_name')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var phone = document.getElementsByName('phone')[0].value;
    var message = document.getElementsByName('message')[0].value;


    Email.send({
        SecureToken: "YOUR_SECURE_TOKEN", //This token you guys can generate on smtpjs.com website.And then just put it here.
        To: 'ali@boxcars.com',
        From: email,
        Subject: "New Contact Form Submission",
        Body: "First Name: " + firstName + "<br>" +
            "Last Name: " + lastName + "<br>" +
            "Email: " + email + "<br>" +
            "Phone: " + phone + "<br><br>" +
            "Message: " + message
    }).then(
        function(response) {
            alert('Message sent successfully!');
        },
        function(error) {
            alert('Failed to send message. Please try again later.');
        }
    );
});