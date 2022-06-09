const { MessageEmbed } = require('discord.js');
const config = require('./../configs/discord.json');

module.exports = {
    name: 'help',
    description: "help embed",
    execute(message, args, client,){
        const exampleEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(config.bot_name + ' Help')
        .addFields(
            { name: 'Help List', value: '**Prefix**:\nThe prefix is ' + config.prefix + '\n **Usage**:\n' + config.prefix + 'shortit [Link]' },      
            { name: '\u200B', value: '\u200B' },
            { name: 'Command List', value: '`' + config.prefix + 'help` *A list of help*\n' + '`' + config.prefix + 'shortit` *The command to short*\n' + '`' + config.prefix + 'ping` *Show how fast is your bot*\n' },  
        )

        .setTimestamp()
    
    message.channel.send({ embeds: [exampleEmbed] });
}};

