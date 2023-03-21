const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('chill')
        .setDescription('Tells Zach what he needs to hear'),
    async execute(interaction) {
        await interaction.reply('<@124216772957175808>:handshake:chilling out\nNeeds to be you pal.');
    },
};