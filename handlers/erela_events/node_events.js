let started = false;
module.exports = (client) => {
  client.manager
    .on("nodeConnect", (node) => {
      if (!started) {
        started = true;
        client.logger(`Node connected :: ${String(node.options.identifier).brightBlue}`)
      }
      setTimeout(() => {
        started = false;
      }, 2000)
    })
    .on("nodeCreate", (node) => {
      client.logger(`Node created :: ${String(node.options.identifier).brightBlue}`)
    })
    .on("nodeReconnect", (node) => {
      client.logger(`Node reconnecting... :: ${String(node.options.identifier).brightBlue}`)
    })
    .on("nodeDisconnect", (node) => {
      client.logger(`Node disconnected :: ${String(node.options.identifier).brightBlue}`)
      setTimeout(() => {
        node.connect();
      }, 1000);
    })
    .on("nodeError", (node, error) => {
      client.logger(`Node errored :: ${String(node.options.identifier).brightBlue}`)
      setTimeout(() => {
        node.connect();
      }, 1000);
    })

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
