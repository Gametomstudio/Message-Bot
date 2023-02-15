const { Client, Collection, Message, MessageEmbed, Discord } = require("discord.js");

module.exports = {
  name: "ping",
  aliases: 'Ping',
  run: async (client, message, args) => {
    const msg = new MessageEmbed()
      .setTitle('Ping')
      .setDescription(`${client.ws.ping}ms`)
      .setColor("GREEN")
    message.channel.send({ embeds: [msg] }).catch(error => console.log(error))
  },
};