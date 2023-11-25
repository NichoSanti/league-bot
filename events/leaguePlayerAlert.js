const { Events } = require("discord.js");

module.exports = {
  name: Events.PresenceUpdate,
  execute(oldPresence, newPresence, client) {
    if (!oldPresence && newPresence) {
      console.log(`${newPresence.user.tag} is now online with a new presence.`);
    } else if (oldPresence && !newPresence) {
      console.log(`${oldPresence.user.tag} has gone offline.`);
    } else {
      console.log(`Presence update for ${newPresence.user.tag}.`);

      if (newPresence.activities[0]) {
        console.log(newPresence.activities[0].name);
      }

      console.log(
        `Old status: ${oldPresence.status}, New status: ${newPresence.status}`
      );

      const channelId = "943917750210940941";
      const channel = client.channels.cache.get(channelId);

      let message = ``;

      if (newPresence.activities[0]) {
        message = `He's listening to ${newPresence.activities[0].name}!`;
        if (channel) {
          channel.send(message).catch(console.error);
        }
      }
    }
  },
};
