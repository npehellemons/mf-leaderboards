const { EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const { WOMClient } = require('@wise-old-man/utils');
const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');

const client = new WOMClient({
    apiKey: 'clelbu2bs000008ldha355qvz',
    userAgent: 'nickymf#6435'
  });

module.exports = {
	data: new SlashCommandBuilder()
		.setName('activities')
		.setDescription('Hall of fame van activities.')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	async execute(interaction) {
        const group = await client.groups.getGroupStatistics(4130);
        const metricLeaders = group.metricLeaders; 

        const headerImg = new AttachmentBuilder('assets/hall_of_fame_activities.png');

        const header = new EmbedBuilder()
            .setImage('attachment://hall_of_fame_activities.png')

    const cluesHof = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Clues')
        .addFields(
            { name: 'Overall', value: `${metricLeaders.activities.clue_scrolls_all.player.displayName} - ${metricLeaders.activities.clue_scrolls_all.score}` },
            { name: 'Beginner', value: `${metricLeaders.activities.clue_scrolls_beginner.player.displayName} - ${metricLeaders.activities.clue_scrolls_beginner.score}` },
            { name: 'Easy', value: `${metricLeaders.activities.clue_scrolls_easy.player.displayName} - ${metricLeaders.activities.clue_scrolls_easy.score}` },
            { name: 'Medium', value: `${metricLeaders.activities.clue_scrolls_medium.player.displayName} - ${metricLeaders.activities.clue_scrolls_medium.score}` },
            { name: 'Hard', value: `${metricLeaders.activities.clue_scrolls_hard.player.displayName} - ${metricLeaders.activities.clue_scrolls_hard.score}` },
            { name: 'Elite', value: `${metricLeaders.activities.clue_scrolls_elite.player.displayName} - ${metricLeaders.activities.clue_scrolls_elite.score}` },
            { name: 'Master', value: `${metricLeaders.activities.clue_scrolls_master.player.displayName} - ${metricLeaders.activities.clue_scrolls_master.score}` },
        )
            
    const pvpHof = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('PvP')
        .addFields(
            { name: 'Bounty Hunter (Rogue)', value: `${metricLeaders.activities.bounty_hunter_rogue.player.displayName} - ${metricLeaders.activities.bounty_hunter_rogue.score}` },
            { name: 'Bounty Hunter (Hunter)', value: `${metricLeaders.activities.bounty_hunter_hunter.player.displayName} - ${metricLeaders.activities.bounty_hunter_hunter.score}` },
            { name: 'Last man standing', value: `${metricLeaders.activities.last_man_standing.player.displayName} - ${metricLeaders.activities.last_man_standing.score}`},
            { name: 'PVP Arena', value: `${metricLeaders.activities.pvp_arena.player.displayName} - ${metricLeaders.activities.pvp_arena.score}` },
        )
    
    const minigamesHof = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Minigames')
        .addFields(
            { name: 'Soul Wars Zeal', value: `${metricLeaders.activities.soul_wars_zeal.player.displayName} - ${metricLeaders.activities.soul_wars_zeal.score}` },
            { name: 'Guardians of the rift', value: `${metricLeaders.activities.guardians_of_the_rift.player.displayName} - ${metricLeaders.activities.guardians_of_the_rift.score}` },
        )

        return await interaction.channel.send({ embeds: [header, cluesHof, pvpHof, minigamesHof], files: [headerImg]}).then(interaction.channel.send('Laatst bijgewerkt op: ' + new Date().toLocaleString()));
    },
};

