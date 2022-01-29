const {
  MessageEmbed
} = require("discord.js");
const config = require(`${process.cwd()}/botconfig/config.json`);
const ee = require(`${process.cwd()}/botconfig/embed.json`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
module.exports = {
  name: "afk",
  category: "💰 Premium",
  cooldown: 10,
  aliases: ["24/7", "afkmusic"],
  usage: "afk",
  description: "Toggles if the Current Queue should be stated on 'afk' or not [DEFAULT: false]",
  memberpermissions: ["ADMINISTRATOR"],
  parameters: {
    "type": "music",
    "activeplayer": true,
  },
  type: "music",
  run: async (client, message, args, user, text, prefix, player) => {
    //set the player afk
    player.set(`afk`, !player.get(`afk`))
    //return an information message
    return message.reply({
      embeds: [new MessageEmbed()
        .setFooter(es.footertext, es.footericon).setColor(es.color).setThumbnail(es.thumb ? es.footericon : null)
        .setTitle(eval(client.la[ls]["cmds"]["settings"]["afk"]["variable1"]))
        .setDescription(eval(client.la[ls]["cmds"]["settings"]["afk"]["variable2"]))
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
