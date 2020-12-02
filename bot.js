require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!"

client.on('ready', () => {
    console.log(`Im live, maybe logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    message.channel.send(`Command name: ${command}\nArguments: ${args}`);

    if (message.content ===`${prefix}ping`) {
        message.channel.send('Pong!');
    }
});

client.login(process.env.BOT_TOKEN);