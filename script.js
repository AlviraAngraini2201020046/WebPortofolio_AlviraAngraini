function showAlert() {
    alert("Button clicked!"); 
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    alert("Message sent!"); 
});
