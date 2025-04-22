// Toggle Mobile Menu
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    navbar.classList.toggle("active");
};

// Close menu on link click
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});



  
// WhatsApp Order Form Submission (44 Design)
document.getElementById("order-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Stop the form from refreshing
  
    // Collect form values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let service = document.getElementById("service").value.trim();
    let details = document.getElementById("details").value.trim();
  
    // Your WhatsApp number in international format (no + sign)
    let phoneNumber = "255765752918";
  
    // Construct the message
    let message = `Hello, my name is ${name}.%0A📧 Email: ${email}%0A🛠 I need the service: *${service}*%0A📝 Details: ${details}%0A%0APlease get back to me.`;
  
    // Open WhatsApp chat
    let whatsappURL = `https://wa.me/${255765752918}?text=${message}`;
    window.open(whatsappURL, "_blank");
  });
  