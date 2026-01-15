const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage'
        ]
    }
});

client.on('qr', qr => {
    console.log(qr);
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('WhatsApp Bot is Ready!');
});

client.on('message', message => {
    if (message.body.toLowerCase() === 'hi') {
        message.reply('Hello! I am your 24/7 WhatsApp Bot 🤖');
    }
});

client.initialize();
