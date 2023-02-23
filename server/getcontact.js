import axios from 'axios';
// // const API_KEY = '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';
// /**
//  * This function is used to get the contact details from the sendinblue contacts
//  */
// async function getContactsEmail() {
//   try {
//     const response = await axios.get('https://api.sendinblue.com/v3/contacts', {
//       headers: {
//         'api-key': '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'
//       }
//     });
//     // console.log('Successfully connected');
//     const contacts = response.data.contacts;
//     const emails = contacts.map(contact => contact.attributes.FIRSTNAME);
//     //     const emails = contacts.map(contact => contact.email);
//     console.log(emails)
//   } catch (error) {
//     console.error('error');
//   }
// }

// getContactsEmail();

// // async function getContactsEmails() {
// //   try {
// //     const response = await axios.get('https://api.sendinblue.com/v3/contacts', {
// //       headers: {
// //         'api-key': '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'
// //       }
// //     });
// //     const contacts = response.data.contacts;
// //     const emails = contacts.map(contact => contact.email);
// //     console.log(emails);
// //   } catch (error) {
// //     console.error(error);
// //   }
// // }

// // getContactsEmails();

// // async function getTemplates(){
// //     try{
// //         const headers = await axios.get('https://my.sendinblue.com/v3/smtp/templates',{
// //             headers:{
// //                 'api-key':'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'
// //             }
// //         })
// //         const templates = response.data.templates;
// //         const name = templates.map(template => template.name);
// //         console.log(name);
// //     }
// //     catch(error){
// //         console.log('Error')
// //     }
// // }
// // getTemplates();

// // const axios = require('axios');

// /**
//  * This is the function used to get the Template details from the Sendinblue
//  */
// async function getTemplates() {
//   try {
//     const response = await axios.get('https://api.sendinblue.com/v3/smtp/templates', {
//       headers: {
//         'api-key': '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'
//       }
//     });
//     const templates = response.data.templates;
//     const templateNames = templates.map(template => template.name);
//     //To get the templates and id
//     templates.forEach(template => { 
//         console.log(`Template ID: ${template.id}`);
//         console.log(`Template Name: ${template.name}`);
//       });
//     console.log(templateNames,'Names');
//   } catch (error) {
//     console.error(error);
//   }
// }

// getTemplates();

/**
 * This function is used to create the dynamic html template in the sendinblue
 */

const apiKey = "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";

async function createTemplate(name, htmlContent) {
  try {
    const response = await axios.post(`https://api.sendinblue.com/v3/smtp/templates`, {
      name: name,
      htmlContent: htmlContent
    }, {
      headers: {
        "api-key": apiKey
      }
    });
    console.log(`Template created with ID: ${response.data.id}`);
  } catch (error) {
    console.error('error');
  }
}

const name = "Feb 7";
const htmlContent = "<html><body><h1>Hello World!😊</h1></body></html>";

createTemplate(name, htmlContent);
