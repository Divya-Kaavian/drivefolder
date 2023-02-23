// const Shopify = require('shopify-api-node');
// // const { default: App } = require('../client/src/App');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const express= require('express')
// const app=express();
// app.use(bodyParser.json());
// app.use(cors({ origin: 'http://localhost:3000' }));

// const shopify = new Shopify({
//     shopName:'demo-4371',
//     apiKey:'cfeda41faea7742c392ef6464188107a',
//     password:'13ca8fd07d846dfda768558888d094be',
// })

// // async function createNewCustomer()

// app.post('/addcustomer',async (req,res)=>{
//     const {firstname,lastname,mail} = req.body;
//     console.log(firstname);
//     console.log(lastname);
//     console.log(mail);
//     const customer = {customer:{"first_name":firstname,"last_name":lastname,"email":mail}};
//     try{
//         console.log('Inserted')
//         const newCustomer = await shopify.customer.create(customer);
//         console.log('New Customer ',newCustomer.id)
//     }catch(err){
//         console.log('Error')
//     }
// })

// app.listen(3001,()=>{
//     console.log('App is Running')    
// })

// const express = require('express');
// const app = express();
// const http = require('http');
// require('isomorphic-fetch');
// const Koa = require('koa');
// const next =  require('next');
// const { default: createShopifyAuth} = require('@shopify/koa-shopify-auth')
// const {verifyRequest} = require('@shopify/koa-shopify-auth')
// const { default: Shopify,Apiversion} = require('@shopify/shopify-api')
// const express= require('express')
// const app=express();
// app = next ({dev});
// const port = parseInt(process.env.PORT,10)||3000;
// const dev = process.env.NODE_ENV !== 'production'
// const handle=app.getRequestHandler();s
// const Shopify = require('@shopify/shopify-api').Shopify;
// const ApiVersion = require('@shopify/shopify-api').ApiVersion;
// require('dotenv').config();

// const { API_KEY, API_SECRET_KEY, SCOPES, SHOP, HOST, HOST_SCHEME } = process.env;

// Shopify.Context.initialize({
//     API_KEY:process.env.API_KEY,
//     API_SECRET_KEY:process.env.ACTIVE_SHOPIFY_SHOPS,
//     SCOPES: process.env.SHOPES.split(','),
//     HOST_NAME: process.env.HOST.replace(/https?:\/\//, ""),
//     HOST_SCHEME,
//     IS_EMBEDDED_APP: false,
//     API_VERSION: ApiVersion.July22,
//     SESSION_STORAGE: new Shopify.Session/
// });

// const ACTIVE_SHOPIFY_SHOPS = {};

// app.get('/', async (http_request, http_response) => {
//     if(ACTIVE_SHOPIFY_SHOPS[SHOP] === undefined) {
//         http_response.redirect('/auth/shopify');
//     } else {
//         http_response.send('<html><body><p>Your Node instance is running.</p></body></html>');
//     }
// });


// const httpServer = http.createServer(app);

// httpServer.listen(3000, () => console.log('Your Slack-OAuth app is listening on port 3000.'));

const express = require('express');
const app = express();
const shopify = require('shopify-api-node');
const client = new shopify.clients.Rest({session});
const response = client.get({path: 'shop'});

app.get('/',async(req,res)=>{
    // Session is built by the OAuth process
    const productId = "8098453618979";
    // `session` is built as part of the OAuth process
    const client = new shopify.clients.Rest({session});
    const product = await client.get({
      path: `products/${productId}`,
      query: {id: 1, title: "title"}
    });
    
  });