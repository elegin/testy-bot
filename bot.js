require('dotenv').config();
const axios = require('axios');
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!"

client.on('ready', () => {
    console.log(`Im live, maybe logged in as ${client.user.tag}!`);
  });

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    if (message.content ===`${prefix}ping`) {
        message.channel.send('Pong!!!!!!!!!!!');
    }
    
    if (message.content ===`${prefix}meme`) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        // const command = args.shift().toLowerCase();
        axios.get(`https://meme-api.herokuapp.com/gimme/dankmemes`)
        .then(response => {
          console.log(response.data.url);
          const embed = new Discord.MessageEmbed()
          .setImage(response.data.url)
        message.channel.send(embed);         
        })
        .catch(error => {
          console.log(error);
        });
     
    }

});

client.login(process.env.BOT_TOKEN);