const { Client, Collection, Message, MessageEmbed, Discord } = require("discord.js");

module.exports = {
    name: "sendpz",
    aliases: 'SendPz',
    permissions : ["MANAGE_MESSAGES"],
    run: async (client, message, args) => {

       
        const user = message.mentions.users.first()
        const zprava = args.slice(2).join(' ')
        const chyba = new MessageEmbed()
        .setColor('RED')
        .setDescription("⚠️ Chyba ⚠️")

        try {
                const embed = new MessageEmbed()
	                .setColor(args[1])
	                .setDescription(zprava)
                   
	       
          
           
            user.send({ embeds: [embed] })
           } catch(err) {
        
                message.author.send({ embeds: [chyba] })

                   }
            
            
            message.delete();
           
    },

};
