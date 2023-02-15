const { Client, Collection, Message, MessageEmbed, Discord } = require("discord.js");

module.exports = {
    name: "send",
    aliases: 'Send',
    permissions : ["MANAGE_MESSAGES"],
    run: async (client, message, args) => {

       

        const kanal = client.channels.cache.get(args[0].replace('<#','').replace('>',''))
        
        const zprava = args.slice(2).join(' ')
        
         const chyba = new MessageEmbed()
        .setColor('RED')
        .setDescription("⚠️ Chyba ⚠️")
         
         
        try {
            const embed = new MessageEmbed()
	                .setColor(args[1])
	                .setDescription(zprava)
	       
            kanal.send({ embeds: [embed] })
            
            message.delete();
        } catch(err) {
        
                message.author.send({ embeds: [chyba] })

                   }
                
           
    },

};
