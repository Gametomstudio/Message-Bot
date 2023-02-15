const { Client, Collection, Message, MessageEmbed, Discord } = require("discord.js");

module.exports = {
  name: "info",
  aliases: 'Info',
  run: async (client, message, args) => {
    const msg = new MessageEmbed()
      .setTitle('Informace')
      .setDescription(`Autor: Game tom studio \nVytvořen: 28.9. 2021`)
      .setColor("GREEN")
    message.channel.send({ embeds: [msg] }).catch(error => console.log(error))
  },
};