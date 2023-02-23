const nodemailer = require('nodemailer');
const transporter = nodemailer.createTestAccount({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    auth:{
        user:'divyadharshini.murugan@kaaviansys.com',
        password:'uitgoucislrdbhmc'
    }
})

const template = `
    <html>
        <body>
            <h2> Hello {{name}} </h2>
            <h4>We are very happy to have you as our lead </h4>
            <p>We had more plans and more services are provided like Parental care, Keynote speaker, Course Tutorial</p>
            <h3>We all welcome..</h3>
        </body>
    </html>
`;

const recipients = [{email:'divyadharshini14322@gmail.com', name:'divya'},{email:'mkamaleswaren@gmail.com', name:'kamal'}]

recipients.forEach((recipient)=>{
    const message = {
        from : 'divyadharshini.murugan@kaaviansys.com',
        to : recipient.email,
        subject: 'The Warm greeting from our end. RR',
        html:template.replace('{{name}}',recipient.name)
    }

    transporter.sendMail(message,(error,info)=>{
        if(error){
            console.log('Error');
        }
        else{
            console.log(`Email Sent to the ${recipient.name}`)
        }
    })
})