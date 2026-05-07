const https = require('https');

const DL_USERNAME = 'PT296867497';
const DL_PASSWORD = '3ntM09lv1St4';
const DL_FEED_XML = 'https://store.dreamlove.es/dyndata/exportaciones/csvzip/catalog_1_50_125_2_eb10a792c0336bc695e2b0ec29d88402_xml_plain.xml';
const DL_FEED_CSV = 'https://store.dreamlove.es/dyndata/exportaciones/csvzip/catalog_1_50_125_2_eb10a792c0336bc695e2b0ec29d88402_csv_plain.csv';
const SHOPIFY_STORE = 'salvacasal.myshopify.com';
const SHOPIFY_CLIENT_ID = '25f03eeef4e55773fea142bea54f22b5';
const SHOPIFY_CLIENT_SECRET = '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';

console.log('Sync Dreamlove → Shopify démarré');
console.log('Feed XML:', DL_FEED_XML);
console.log('Feed CSV:', DL_FEED_CSV);
console.log('Boutique:', SHOPIFY_STORE);
