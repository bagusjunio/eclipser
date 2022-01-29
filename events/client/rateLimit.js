//here the event starts
const settings = require(`${process.cwd()}/botconfig/settings.json`);
module.exports = (client, rateLimitData) => {
  if (!settings["ratelimit-logs"]) return;
  console.warn(rateLimitData)
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
