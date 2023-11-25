const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  
  // time user will have to wait before using command again
  cooldown: 8,
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("replies with information about bot"),
  async execute(interaction) {
    await interaction.reply(
      "I'm dedicated to improving league player's mental"
    );
  },
};
