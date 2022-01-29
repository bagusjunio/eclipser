//The Module
module.exports = async (client, thread) => {
  try {
    if (thread.joinable && !thread.joined) {
      await thread.join();
    }
  } catch (e) {
    console.log(String(e).grey)
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