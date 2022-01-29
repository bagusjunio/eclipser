//here the event starts
const settings = require(`${process.cwd()}/botconfig/settings.json`);
module.exports = (client, info) => {
  if (!settings[`debug-discordjs-logs`]) return;
  console.log(String(info).grey);
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
