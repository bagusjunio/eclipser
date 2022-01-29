const {
  MessageEmbed
} = require(`discord.js`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
module.exports = {
  name: `clearfilter`,
  category: `👀 Filter`,
  aliases: [`cf`, `clearfilters`],
  description: `Clears the Equalizer`,
  usage: `clearfilter`,
  parameters: {
    "type": "music",
    "activeplayer": true,
    "previoussong": false
  },
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    player.clearEQ();
    player.node.send({
      op: "filters",
      guildId: message.guild.id,
      equalizer: player.bands.map((gain, index) => {
        var Obj = {
          "band": 0,
          "gain": 0,
        };
        Obj.band = Number(index);
        Obj.gain = Number(gain)
        return Obj;
      }),
    });
    player.set("eq", "💣 None");
    player.set("filter", "💣 None");
    if (!message.channel) return;
    return message.channel.send({
      embeds: [new MessageEmbed()
        .setColor(es.color).setThumbnail(es.thumb ? es.footericon : null)
        .setTitle(eval(client.la[ls]["cmds"]["filter"]["clearfilter"]["variable1"]))
        .addField(eval(client.la[ls]["cmds"]["filter"]["clearfilter"]["variablex_2"]), eval(client.la[ls]["cmds"]["filter"]["clearfilter"]["variable2"]))
        .addField(eval(client.la[ls]["cmds"]["filter"]["clearfilter"]["variablex_3"]), eval(client.la[ls]["cmds"]["filter"]["clearfilter"]["variable2"]))
        .setDescription(eval(client.la[ls]["cmds"]["filter"]["clearfilter"]["variable4"]))
      ]
    });
  }
};
/**
 * @INFO
 * Bot Coded by Bagus Junio#0104 | https://dsc.gg/servereclipse
 * @INFO
 * Work for Eclipse Development | https://www.servereclipse.site/
 * @INFO
 * Please mention him / Eclipse Development, when using this Code!
 * @INFO
 */