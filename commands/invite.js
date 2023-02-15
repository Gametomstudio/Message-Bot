const { Client, Collection, Message, MessageEmbed, Discord } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: 'Invite',
  run: async (client, message, args) => {
    const msg = new MessageEmbed()
      .setTitle('Invite')
      .setDescription(`http://message-bot.tk`)
      .setColor("GREEN")
    message.channel.send({ embeds: [msg] }).catch(error => console.log(error))
  },
};