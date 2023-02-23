// // import { ApiClient, SMTPApi, CreateSmtpTemplate } from 'sendinblue-api';
// import pkg from 'sendinblue-api';
// const { ApiClient, SMTPApi, CreateSmtpTemplate } = pkg;
// const defaultClient = ApiClient.instance;

//CLIENT PROJECT : SENDINBLUE API KEY : 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
// // Configure API key authorization: api-key

// const apiKey = defaultClient.authentications['api-key'];
// apiKey.apiKey = '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';

// const apiInstance = new SMTPApi();

// const createTemplate = new CreateSmtpTemplate();
// createTemplate.sender = { "name": "Divya", "email": "divyadharshini14322@gmail.com" };
// createTemplate.templateName = "My custom template";
// createTemplate.htmlContent = "<html><body>Your custom HTML content Designed using the node js</body></html>";

// apiInstance.createSmtpTemplate(createTemplate)
//     .then(function (data) {
//         console.log('API called successfully. Template created with ID: ', data.id);
//     }, function (error) {
//         console.error(error);
//     });

import axios from 'axios';
// const API_KEY = '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';

// Define the dynamic variables for your template
const createTemplate = async () => {
    const API_KEY = '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';
    const requestData = {
      name: 'Example template',
      subject: 'Example template subject',
      htmlContent: '<html><body><h1>Example template content</h1></body></html>'
    };
  
    try {
      const response = await axios.post('https://my.sendinblue.com/camp/lists/template', requestData, {
        headers: {
          'api-key': API_KEY,
          'Content-Type': 'application/json'
        }
      });
      response;
      console.log('Created');
    } catch (error) {
      console.error('error');
    }
  };
  
  createTemplate()

// import pkg from 'sib-api-v3-sdk';
// const { ApiClient, TransactionalEmailsApi, CreateSmtpTemplate } = pkg;
// let defaultClient = ApiClient.instance;

// let apiKey = defaultClient.authentications['api-key'];
// apiKey.apiKey = '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';
// //     const API_KEY = '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';

// let apiInstance = new TransactionalEmailsApi();

// let smtpTemplate = new CreateSmtpTemplate();

// smtpTemplate.sender = {"name":"John Doe","email":"example@example.com"};
// smtpTemplate.templateName = "Example Template";
// smtpTemplate.htmlContent = "<html><body><h1>This is my first transactional email</h1></body></html>";
// smtpTemplate.subject = "New Subject";
// smtpTemplate.replyTo = "replyto@domain.com";
// smtpTemplate.toField = "example@example.com";
// smtpTemplate.isActive = true;

// apiInstance.createSmtpTemplate(smtpTemplate).then(function(data) {
//   console.log('API called successfully. Returned data: ' + JSON.stringify(data));
// }, function(error) {
//   console.error('Error');
// // });