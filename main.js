const { Client } = require('discord.js-selfbot-v13');
const token = ['']; // token(s)
const id = ''; // victime
const salon = ''; // channel id

const phrases = [
    "hey @",
    "kill ur self @",
    "fk ur mum @" // for add "", and not a , for the last
];

async function spamMessages(token) {
    const client = new Client();

    client.on('ready', async () => {

        const channel = client.channels.cache.get(salon);
        if (channel) {
            const user = await client.users.fetch(id);
            if (user) {
                setInterval(async () => {
                    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
                    const message = phrase.replace('@', user.toString());
                    await channel.send(message);
                }, 500);
            }
        }
    });

try {
    await client.login(token);
} catch {}
}

token.forEach(token => {
    spamMessages(token);
});
