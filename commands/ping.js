const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kwal')
		.setDescription('Noemt Mike een kwal!'),
	async execute(interaction) {
		return interaction.reply('Mike is een kwal!');
	},
};