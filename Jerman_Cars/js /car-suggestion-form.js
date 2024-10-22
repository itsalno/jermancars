document.getElementById('car-suggestion-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var firstName = document.getElementsByName('name')[0].value;
    var lastName = document.getElementsByName('surname')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var phone = document.getElementsByName('phone')[0].value;
    var carbrand = document.getElementsByName('car-brand')[0].value;
    var modelname = document.getElementsByName('model-name')[0].value;
    var year = document.getElementsByName('year')[0].value;
    var comment = document.getElementsByName('comment')[0].value;

    Email.send({
        SecureToken: "YOUR_SECURE_TOKEN", //This token you guys can generate on smtpjs.com website.And then just put it here.
        To: 'ali@boxcars.com',
        From: email,
        Subject: "New Car Form Submission",
        Body: "First Name: " + firstName + "<br>" +
            "Last Name: " + lastName + "<br>" +
            "Email: " + email + "<br>" +
            "Phone: " + phone + "<br>" +
            "Car Brand: " + carbrand + "<br>" +
            "Model Name: " + modelname + "<br>" +
            "Year of Production: " + year + "<br>" +
            "Comment: " + comment + "<br>"
    }).then(
        function(response) {
            alert('Message sent successfully!');
        },
        function(error) {
            alert('Failed to send message. Please try again later.');
        }
    );
});