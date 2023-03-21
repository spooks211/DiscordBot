const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs');
const urlRegex = /(https?:\/\/[^\s]+)/gi; // Regular expression format for checking if it's a URL

module.exports = {
  data: new SlashCommandBuilder()
    .setName('addmeme')
    .setDescription('Adds a meme URL to the list (Use an embeddable URL like YouTube or TikTok)')
    .addStringOption(option => option.setName('url').setDescription('The URL to add to the JSON file').setRequired(true)),
  async execute(interaction) {
    // Get the URL string from the command's options
    const url = interaction.options.getString('url');

    // Check if the provided string is a URL
    if (!url.match(urlRegex)) {
      // If the string is not a URL, reply with an error message
      return interaction.reply({ content: 'The string you provided is not a valid URL!', ephemeral: true });
    }

    // Load the JSON file containing the list of memes
    let data = JSON.parse(fs.readFileSync(''));

    // Add the URL to the JSON file's 'memes' array
    data.memes.push(url);

    // Write the updated JSON file back to disk
    fs.writeFileSync('', JSON.stringify(data, null, 2));

    // Send a reply to the user indicating the URL was added successfully
    await interaction.reply(`Added ${url} successfully to the list!`);
  },
};
