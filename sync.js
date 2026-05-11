const https = require('https');

const DL_USERNAME = 'PT296867497';
const DL_PASSWORD = 'j4Lv1OeFTv8';
const DL_API_URL = 'api-dreamlove.gesio.be';

const SHOPIFY_STORE = 'salva-casal.myshopify.com';
const SHOPIFY_CLIENT_ID = '25f03eeef4e55773fea142bea54f22b5';
const SHOPIFY_CLIENT_SECRET = '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';

function getDreamloveProducts() {
    const auth = Buffer.from(DL_USERNAME + ':' + DL_PASSWORD).toString('base64');
    const options = {
        hostname: DL_API_URL,
        path: '/api/products',
        method: 'GET',
        headers: {
            'Authorization': 'Basic ' + auth,
            'Content-Type': 'application/json'
        }
    };

    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch(e) {
                    reject(e);
                }
            });
        });
        req.on('error', reject);
        req.end();
    });
}

async function main() {
    console.log('Sync Dreamlove → Shopify démarré');
    try {
        const products = await getDreamloveProducts();
        console.log('Produits récupérés:', products.length || 0);
    } catch(err) {
        console.error('Erreur:', err.message);
    }
}

main();
