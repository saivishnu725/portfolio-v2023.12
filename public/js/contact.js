function sendMail(myEmail) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    let body =
        "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;
    window.location.href =
        myEmail + "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);
    return false;
}