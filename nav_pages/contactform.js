function emailSend(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mikhal.gelo@gmail.com",
        Password : "72EFEE04DF80299E82BF06FB466BB38EA1AF",
        To : 'bambooshooter@yahoo.com',
        From : "mikhal.gelo@gmail.com",
        Subject : "INQUIRY",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}