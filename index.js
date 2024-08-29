const form=document.querySelector('form');
const fullname=document.getElementById("clientname");
const email=document.getElementById("clientemail");
const phone=document.getElementById("clientphone");

function sendEmail(){
    const bodyMessage =`Name: ${fullname.value} <br> Email:${email.value} <br> Phone no: ${phone.value} `;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kumarsumit9496@gmail.com",
        Password : "6C39889475F81B8BF437755ADA2103BC9A53",
        To : 'kumarsumit9496@gmail.com',
        From : "kumarsumit9496@gmail.com",
        Subject : "Portfolio connection",
        Body : "I want to connect"
    }).then(
      message => {
        if(message =='OK'){
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully",
                icon: "success"
            });
        }
      }
    );
    
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    sendEmail();
})