document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const responseDiv = document.getElementById('form-response');
    responseDiv.innerText = "Thank you! Your message has been received."; // [cite: 15]
    this.reset();
});