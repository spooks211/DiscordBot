// Importing the SlashCommandBuilder class from discord.js
const { SlashCommandBuilder } = require('discord.js');

// Exporting an object that contains the data and execute properties
module.exports = {
  // Creating a new SlashCommandBuilder and setting its name and description
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Lists all commands for moonbot.'),

  // Creating an async function that gets executed when the command is triggered
  async execute(interaction) {
    // Sending a reply to the interaction with a list of available commands
    await interaction.reply('Current commands: /help, /chill, /meme, /addmeme, /quote, /addquote');
  },
};
