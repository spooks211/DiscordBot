const {SlashCommandBuilder} = require('discord.js');
const quoteJSON = require('C:/Users/noahp/Desktop/moonbot2/json/quoteList.json');

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