const { Client, Collection, Message, MessageEmbed, Discord } = require("discord.js");

module.exports = {
  name: "support",
  aliases: 'Support',
  run: async (client, message, args) => {
    const msg = new MessageEmbed()
      .setTitle('Support Server')
      .setDescription(`https://dsc.gg/message-bot-support-server`)
      .setColor("GREEN")
    message.channel.send({ embeds: [msg] }).catch(error => console.log(error))
  },
};