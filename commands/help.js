const { Client, Collection, Message, MessageEmbed, Discord } = require("discord.js");

module.exports = {
  name: "help",
  aliases: 'Help',
  run: async (client, message, args) => {
    const msg = new MessageEmbed()
      .setTitle('Help')
      .setDescription(`m!help \nm!info \nm!invite \nm!support \nm!ping \nm!stats \nm!send #kanál BARVA Text \nm!sendpz @uživatel BARVA Text`)
      .setColor("GREEN")
    message.channel.send({ embeds: [msg] }).catch(error => console.log(error))
  },
};