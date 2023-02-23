/**
 * Method 1 :  to design the dynamic template
 */
// import pkg from 'handlebars';
// const { compile } = pkg;

// const template = `
// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="utf-8">
//   <title>{{templateName}}</title>
// </head>
// <body>
//   <h1>{{header}}</h1>
//   <p>Hello {{name}},</p>
//   <p>{{body}}</p>
//   <p>Best regards,</p>
//   <p>{{senderName}}</p>
// </body>
// </html>
// `;

// const data = {
//   templateName: "Example Template",
//   header: "Welcome!",
//   name: "Kamal",
//   body: "This is an example email.",
//   senderName: "Kamal"
// };

// const compiledTemplate = compile(template);
// const renderedTemplate = compiledTemplate(data);

// console.log(renderedTemplate);

// const handlebars = require("handlebars");

/**
 * Approach 2
 */
// import handlebars from "handlebars";


// const template = `
// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="utf-8">
//   <title>{{templateName}}</title>
// </head>
// <body>
//   <h1>{{header}}</h1>
//   <p>Hello {{name}},</p>
//   <p>{{body}}</p>
//   <p>Best regards,</p>
//   <p>{{senderName}}</p>
// </body>
// </html>
// `;

// const compiledTemplate = handlebars.compile(template);

// // const axios = require("axios");
// import axios from 'axios'

// const data = {
//   templateName: "Example Template",
//   header: "Welcome!",
//   name: "Kamal",
//   body: "This is an example email.",
//   senderName: "Kamal",
//   senderEmail:"divyadharshini.murugan@kaaviansys.com"
// };

// const renderedTemplate = compiledTemplate(data);

// const apiKey = "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";
// const url = `https://api.sendinblue.com/v3/smtp/templates`;

// axios.post(url, {
//   name: data.templateName,
//   htmlContent: renderedTemplate,
//   subject: data.header,
//   fromName: data.senderName,
//   fromEmail:data.senderEmail
// }, {
//   headers: {
//     "api-key": apiKey,
//     "Content-Type": "application/json"
//   }
// })
// .then(response => {
//   console.log('Success',response.data);
// })
// .catch(error => {
//   console.error('error');
// });

/**
 * Approach 3
 */

// import axios from 'axios';
// import pkg from 'handlebars';
// const { compile } = pkg;

// const template = compile(`
//   <html>
//     <head>
//       <title>{{title}}</title>
//     </head>
//     <body>
//       <h1>{{header}}</h1>
//       <p>{{message}}</p>
//     </body>
//   </html>
// `);

// const context = {
//   title: 'Example Template',
//   header: 'Hello, World!',
//   message: 'This is an example template designed using Handlebars and Node.js'
// };

// const htmlContent = template(context);

// axios.post('https://api.sendinblue.com/v3/smtp/templates', {
//   name: 'Example Template',
//   htmlContent: htmlContent,
//   subject: 'Example Template Subject',
//   fromName: 'Kamal',
//   fromEmail: 'divyadharshini.murugan@kaaviansys.com'
// }, {
//   headers: {
//     'api-key': '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'
//   }
// })

// axios.post('https://api.sendinblue.com/v3/smtp/templates', {
//   name: 'Example Template',
//   htmlContent: htmlContent,
//   subject: 'Example Template Subject',
//   fromName: 'Sender Name',
//   fromEmail: 'sender@example.com'
// }, {
//   headers: {
//     'api-key': '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'
//   }
// })
// .then(function (response) {
//   console.log(response.data);
// })
// .catch(function (error) {
//   console.error(error.response.data);
// });

/**
 * Approach 4
 */
// import axios from "axios";
// import pkg from 'handlebars';
// const { compile } = pkg;

// async function createTemplate(apiKey, name, subject, htmlContent) {
//   try {
//     const url = `https://api.sendinblue.com/v3/smtp/templates`;

//     const template = {
//       template: name,
//       subject: subject,
//       htmlContent: htmlContent,
//       sender: {
//         name: "Divya",
//         email: "divyadharshini.murugan@kaaviansys.com"
//       }
//     };

//     const config = {
//       headers: {
//         "api-key": apiKey,
//         "content-type": "application/json",
//       },
//     };

//     const response = await axios.post(url, template, config);

//     console.log(response.data);
//   } catch (error) {
//     console.error(error.response.data);
//   }
// }

// const template = compile(`
//   <html>
//     <head>
//       <title>{{title}}</title>
//     </head>
//     <body>
//       <h1>{{header}}</h1>
//       <p>{{message}}</p>
//     </body>
//   </html>
// `);

// const apiKey = "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";
// const name = "Template name";
// const subject = "Subject line";
// const context = {
//     title: 'Example Template',
//     header: 'Hello, World!',
//     message: 'This is an example template designed using Handlebars and Node.js'
//   };
// const htmlContent = template(context);


// createTemplate(apiKey, name, subject, htmlContent);

/**
 * Approach 5
*/
import axios from "axios";
const apiKey = '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';

async function createTemplate(name, html) {
  try {
    const response = await axios.post('https://api.sendinblue.com/v3/smtp/templates', {
      name: name,
      htmlContent: html,
      sender : {
        name: "Sender Name",
        email: "divyadharshini.murugan@kaaviansys.com"
      },
      templateName:"My Template",
      subject: "Subject line"
    }, {
      headers: {
        "api-key": apiKey,
        "content-type": "application/json"
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error(error.response.data);
  }
}

const templateName = "Test Template";
const templateBody = `
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
        }
      </style>
    </head>
    <body>
      <h1>Hello!</h1>
      <p>This is a test email template created from Node.js.</p>
    </body>
  </html>
`;

createTemplate(templateName, templateBody);
