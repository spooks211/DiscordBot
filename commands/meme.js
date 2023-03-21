// Import the SlashCommandBuilder class from the discord.js library
const { SlashCommandBuilder } = require('discord.js');

// Import the JSON data containing memes
const memeJSON = require('C:/Users/noahp/Desktop/moonbot2/json/memesList.json')

// Export an object containing a 'data' property (which is a new SlashCommandBuilder instance)
// and an 'execute' method that sends a random meme in a reply
module.exports = {
    // Create a new SlashCommandBuilder instance with name and description properties
    data: new SlashCommandBuilder()
        .setName('meme')
        .setDescription('Get a random meme'),
        
    // Define the 'execute' method, which takes an 'interaction' object as its argument
    async execute(interaction) {
        // Extract the 'memes' array from the imported JSON data
        let memeArray = memeJSON.memes;
        
        // Generate a random index to use as the array index for the selected meme
        let randomIndex = Math.floor(Math.random() * memeArray.length);
        
        // Get the meme at the randomly generated index
        let randomMeme = memeArray[randomIndex];
        
        // Send the selected meme in a reply to the interaction
        await interaction.reply(randomMeme);
    },
};
