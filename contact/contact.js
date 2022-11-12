function mailSend() { 
    let name = document.getElementById("name").value;
    let email = document.getElementById("mail").value;
    let contactNo = document.getElementById("contactNo").value;
    let message = document.getElementById("message").value;
    let finalmessage = `Name : ${name} <br>  Email : ${email} <br> ${contactNo} <br>  Message : ${message} <br>`;
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "harshsgs203@gmail.com",
        Password : "E2B993B276281EE2F4F1E6D200DB375DB4D9",
        To : 'harshsgs203@gmail.com',
        From : email,
        Subject : "Query Contact Form",
        Body : finalmessage,
    }).then(
      message => alert(message)
    );
}

