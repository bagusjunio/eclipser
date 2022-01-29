const playermanager = require(`${process.cwd()}/handlers/playermanager`);
module.exports = {
  name: `addsimilar`,
  category: `🎶 Music`,
  aliases: [`adds`, `addrelated`, `addr`],
  description: `Adds a similar song of the current Track to the Queue!`,
  usage: `addsimilar`,
  parameters: {
    "type": "music",
    "activeplayer": true,
    "previoussong": false
  },
  type: "queue",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    //execute the code
    playermanager(client, message, Array(`https://www.youtube.com/watch?v=${player.queue.current.identifier}&list=RD${player.queue.current.identifier}`), `similar:add`);
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