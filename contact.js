
function sendEmail() {
    // Use mailto: with the email address
    window.location.href = "mailto:vivek@gmail.com";
  }

  function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var telephone = document.getElementById("telephone").value;
    var message = document.getElementById("message").value;
  
    if (name === "" || email === "" || message === "") {
      document.getElementById("errorMessage").style.display = "block";
      document.getElementById("successMessage").style.display = "none";
    } else {
      document.getElementById("errorMessage").style.display = "none";
      document.getElementById("successMessage").style.display = "block";
      // Add additional logic for sending email or performing other actions
    }
  }
  
  function openEmailForm() {
    var name = "Vivek Virade"; // Replace with the default name
    var email = "vvirade@gmail.com"; // Replace with the default email address
    var subject = "Regarding your website"; // Replace with the default subject
    var body = "Dear Vivek, Name: \nEmail: \nTelephone: \nMessage: \nAddress: \n\nI would like to get in touch with you regarding your website.\n\nSincerely,\n[Your Name]"; // Replace with the default body

    var mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }
  function openWhatsApp() {
    var phoneNumber = "8432077959";  // Replace with the target phone number
    var message = "Hello, I'm interested in your Website.";  // Replace with your pre-filled message
  
    var whatsappLink = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
  
    window.location.href = whatsappLink;
  }
  function openLinkedIn() {
    var linkedinProfileUrl = "https://www.linkedin.com/feed/";  // Replace with your LinkedIn profile URL
    window.open(linkedinProfileUrl, "_blank");
  }
  
  // Set LinkedIn icon using JavaScript
  var linkedinButton = document.getElementById("linkedinButton");
  linkedinButton.style.backgroundImage = "url('https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png')"; // Replace with the path to your LinkedIn logo image
  