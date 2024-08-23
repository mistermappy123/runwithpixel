function sendMail(){
    let params = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
    }

    emailjs.send("service_hqc7oqh", "template_j8vitak", params).then(alert('Message sent!!!!'))
}

