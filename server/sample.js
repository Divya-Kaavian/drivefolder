// // //Using the sample code in the react js
// // const request = require('request');

// // const apiKey = 'cfeda41faea7742c392ef6464188107a';
// // const store = 'demo-4371.myshopify.com/';

// // request.get(`https://${apiKey}:@${store}/admin/api/2023-01/customers.json`, (error, response, body) => {
// //   if (!error && response.statusCode === 200) {
// //     const customers = JSON.parse(body).customers;
// //     console.log(customers);
// //   }
// // });

// const sibApiV3Sdk = require('sib-api-v3-sdk');
// const defaultClient = sibApiV3Sdk.ApiClient.instance;

// // Configure API key authorization: api-key

// const apiKey = defaultClient.authentications['api-key'];
// apiKey.apiKey = "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";

// const templatesApi = new sibApiV3Sdk.TemplatesApi();
// const sendEmail = new sibApiV3Sdk.SendEmail();

// // Replace placeholder values in the template with actual data
// let data = {
//     "name": "Abi",
//     "product": "Product name"
// };
// let templateId = 5; // The ID of the template in SendinBlue

// templatesApi.getTemplate(templateId, (error, template) => {
//     if (error) {
//         console.error(error);
//     } else {
//         let content = template.htmlContent;
//         for (let key in data) {
//             content = content.replace(`{{ ${key} }}`, data[key]);
//         }

//         sendEmail.to = [{email: "recipient@example.com"}];
//         sendEmail.subject = template.subject;
//         sendEmail.htmlContent = content;

//         sendEmailsApi.sendTransacEmail(sendEmail, (error, response) => {
//             if (error) {
//                 console.error(error);
//             } else {
//                 console.log("Email sent successfully");
//             }
//         });
//     }
// });

import axios from 'axios';

async function sendEmail() {
  const API_KEY = 'API_KEY';
  const url = `https://api.sendinblue.com/v3/smtp/email`;
  
  const data = {
    sender: {
      name: 'Meena',
      email: 'meenakshi.m@kaaviansys.com'
    },
    to: [
      {
        email: 'meena070302@gmail.com',
        name: 'Meena'
      }
    ],
    templateId:1,   //TEMPLATE_ID
    params: {
      name: 'Meenakshi'
    }
  };

  const response = await axios.post(url, data, {
    headers: {
      'api-key': API_KEY,
      'Content-Type': 'application/json'
    }
  });
  
  console.log(response.data);
}

sendEmail();

<path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z" class=""></path>