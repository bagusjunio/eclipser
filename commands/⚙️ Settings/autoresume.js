const {
  MessageEmbed
} = require("discord.js");
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
module.exports = {
  name: "autoresume",
  category: `⚙️ Settings`,
  aliases: ["toggleautoresume"],
  cooldown: 10,
  usage: "autoresume",
  description: "Toggles if the Auto-Resume-Function should be enabled or not",
  memberpermissions: ["ADMINISTRATOR"],
  type: "bot",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    //set the new state
    client.settings.set(message.guild.id, !client.settings.get(message.guild.id, "autoresume"), "autoresume");
    //send information embed
    return message.reply({
      embeds: [new MessageEmbed()
        .setFooter(es.footertext, es.footericon).setColor(es.color).setThumbnail(es.thumb ? es.footericon : null)
        .setTitle(eval(client.la[ls]["cmds"]["settings"]["autoresume"]["variable1"]))
        .setDescription(eval(client.la[ls]["cmds"]["settings"]["autoresume"]["variable2"]))
      ]
    });
  }
}
/**
 * @INFO
 * Bot Coded by Bagus Junio#0104 | https://dsc.gg/servereclipse
 * @INFO
 * Work for Eclipse Development | https://www.servereclipse.site/
 * @INFO
 * Please mention him / Eclipse Development, when using this Code!
 * @INFO
 */