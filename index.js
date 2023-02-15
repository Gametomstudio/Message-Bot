const { Client, Collection, Message, MessageEmbed, Discord } = require("discord.js");
const client = new Client({
    intents: 32767,
});

client.commands = new Collection();
client.cooldowns = new Collection();
client.aliases = new Collection();
client.categories = require("fs").readdirSync(`./commands`);

["commands"]
    .filter(Boolean)
    .forEach(h => {
        require(`./handlers/${h}`)(client);
    })

 client.on("ready", async () => {
     console.log('Bot je online!');
      client.user.setActivity(`💬 Sending message...`,{type : "PLAYING", });
     
    });

    client.on('messageCreate', async message => {
        
        let prefix = "m!"
        if (!message.content.startsWith(prefix))
            return;
        if (!message.guild) return;
        if (message.author.bot) return;
        if (message.channel.partial) await message.channel.fetch();
        if (message.partial) await message.fetch();
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const cmd = args.shift().toLowerCase();
    
        const command = client.commands.get(cmd.toLowerCase()) ||  client.commands.find((cmds) => cmds.aliases && cmds.aliases.includes(cmd));
        if (!command) return;
        if (command) {
            if (!message.member.permissions.has(command.permissions || [])) {
                return message.reply({
                    embeds: [
                        new MessageEmbed()
                            .setColor('RED')
                            .setDescription('❌ Nemáš oprávnění! ❌')
                            
                    ]
                })
            }
            command.run(client, message, args, prefix)
        }
    })
    client.login('');