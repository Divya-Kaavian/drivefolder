// const express = require('express');
// const app = express();
// const express = require('express');
// const app = express();

/**
 * Insert the data into the shopify customer details from the node
 * by using the implicit data
 */
import fetch from 'node-fetch';
// import fetch from "node-fetch";
// const shopDomain = '';

async function createCustomer(shopDomain, accessToken, customer) {
    console.log(shopDomain)
  const url = `https://${shopDomain}.myshopify.com/admin/api/2022-01/customers.json`;
  const headers = {
    'Content-Type': 'application/json',
    'X-Shopify-Access-Token': accessToken,
  };
  const response = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ customer: customer }),
  });
  return response.json();
}

const customer = {
  first_name: 'Kokila',
  last_name: 'SS',
  email: 'kokilass@example.com',
};

createCustomer('demo-4371', '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', customer)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
// app.listen(3000,()=>{
//     console.log('Running')
// })