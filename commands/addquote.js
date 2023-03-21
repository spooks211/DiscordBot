const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('addquote')
        .setDescription('Add a quote to the list')
        .addStringOption(option => option.setName('quote').setDescription('The quote to be added to the JSON file').setRequired(true)),
    async execute(interaction){
        const quote = interaction.options.getString('quote');

        let data = JSON.parse(fs.readFileSync('// Put the directory of where the "quoteList.json" file is on your machine here')); 
        data.quotes.push(quote);
        fs.writeFileSync('//Put the directory of where the "quoteList.json" file is on your machine here', JSON.stringify(data, null, 2));

        await interaction.reply(`Added "${quote}" sucessfully to the list!`);
    },
};
