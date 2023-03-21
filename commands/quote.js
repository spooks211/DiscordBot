const {SlashCommandBuilder} = require('discord.js');
const quoteJSON = require(''); // Put the directory of where the "quoteList.json" file is on your machine here

module.exports = {
    data: new SlashCommandBuilder()
        .setName('quote')
        .setDescription('Get a random quote'),

    async execute(interaction){
        let quoteArray = quoteJSON.quotes;
        let randomIndex = Math.floor(Math.random()* quoteArray.length);
        let randomQuote = quoteArray[randomIndex];
        await interaction.reply(randomQuote);
    }
};
