const { Client, Collection, Message, MessageEmbed, Discord } = require("discord.js");

module.exports = {
  name: "stats",
  aliases: 'Stats',
  run: async (client, message, args) => {
    const msg = new MessageEmbed()
      .setTitle('Stats')
      .setDescription(`Serverů: ${client.guilds.cache.size} \nUživatelů: ${client.users.cache.size} \nKanálů: ${client.channels.cache.size}`)
      .setColor("GREEN")
    message.channel.send({ embeds: [msg] }).catch(error => console.log(error))
  },
};