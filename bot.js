// Files //
const config = require('./configs/discord.json');
const yourlsconf = require('./configs/yourls.json')

// Module //
const Discord = require("discord.js");
const fs = require("fs")
const yourls = require("yourls");

// Module Addon //
const { MessageEmbed } = require('discord.js');

// Clients //
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"], ws: {intents: ["GUILDS", "GUILD_MESSAGES"]} });
const connection = new yourls(yourlsconf.yourlsURL, yourlsconf.yourlsSECRET);

// Collection //
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command);
};

// command Handler //
client.on('message', message =>{
    if(!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();
    // command list //
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args, client)
    } else if (command === 'help') {
        client.commands.get('help').execute(message, args, client)
    } else if (command === 'shortit') {
        short_link = message.content.split(config.prefix + "shortit");
            connection.shorten(short_link, function(error, result) {
                if (error) {
                    throw error;
                }
                console.log("Made " + short_link + " to " + result.shorturl);
            message.channel.send("Made new URL <" + result.shorturl + ">");
        });
    }
});

// Bot Client //
client.login(config.token);