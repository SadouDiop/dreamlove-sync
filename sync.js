const https = require('https');
const soap = require('soap');

const DL_USERNAME = 'PT296867497';
const DL_PASSWORD = '3ntM09lv1St4';
const DL_WSDL = 'https://store.dreamlove.es/webservices/orderservice_wsdl.php';
const SHOPIFY_STORE = 'salvacasal.myshopify.com';
const SHOPIFY_CLIENT_ID = '25f03eeef4e55773fea142bea54f22b5';
const SHOPIFY_CLIENT_SECRET = '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';

console.log('Sync Dreamlove → Shopify démarré');
