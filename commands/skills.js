const { EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const { WOMClient } = require('@wise-old-man/utils');
const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');

const client = new WOMClient({
    apiKey: 'clelbu2bs000008ldha355qvz',
    userAgent: 'nickymf#6435'
  });


module.exports = {
	data: new SlashCommandBuilder()
		.setName('highscores')
		.setDescription('Skill highscores van clan members.')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	async execute(interaction) {
        const group = await client.groups.getGroupStatistics(4130);
        const metricLeaders = group.metricLeaders; 

        const headerImg = new AttachmentBuilder('assets/mf_highscores.png');

        const header = new EmbedBuilder()
            .setImage('attachment://mf_highscores.png');
    

        const overallHof = new EmbedBuilder()
        //set color to yellow via hex code
            .setColor(0xFFCC00)
            .setTitle('Overall best in skills')
            .addFields(
                { name: 'Overall', value: `${metricLeaders.skills.overall.player.displayName} - ${metricLeaders.skills.overall.experience} XP - Rank ${metricLeaders.skills.overall.rank}` },
            )

    const combatHof = new EmbedBuilder()
    //set color to yellow via hex code
        .setColor(0xFFCC00)
        .setTitle('Combat skills')
        .addFields(
            { name: 'Attack', value: `${metricLeaders.skills.attack.player.displayName} - ${metricLeaders.skills.attack.experience} XP - Rank ${metricLeaders.skills.attack.rank}` },
            { name: 'Defence', value: `${metricLeaders.skills.defence.player.displayName} - ${metricLeaders.skills.defence.experience} XP - Rank ${metricLeaders.skills.defence.rank}` },
            { name: 'Strength', value: `${metricLeaders.skills.strength.player.displayName} - ${metricLeaders.skills.strength.experience} XP - Rank ${metricLeaders.skills.strength.rank}` },
            { name: 'Hitpoints', value: `${metricLeaders.skills.hitpoints.player.displayName} - ${metricLeaders.skills.hitpoints.experience} XP - Rank ${metricLeaders.skills.hitpoints.rank}` },
            { name: 'Ranged', value: `${metricLeaders.skills.ranged.player.displayName} - ${metricLeaders.skills.ranged.experience} XP - Rank ${metricLeaders.skills.ranged.rank}` },
            { name: 'Prayer', value: `${metricLeaders.skills.prayer.player.displayName} - ${metricLeaders.skills.prayer.experience} XP - Rank ${metricLeaders.skills.prayer.rank}` },
            { name: 'Magic', value: `${metricLeaders.skills.magic.player.displayName} - ${metricLeaders.skills.magic.experience} XP - Rank ${metricLeaders.skills.magic.rank}` },
        )

    const gatheringHof = new EmbedBuilder()
        .setColor(0xFFCC00)
        .setTitle('Gathering skills')
        .addFields(
            { name: 'Farming', value: `${metricLeaders.skills.farming.player.displayName} - ${metricLeaders.skills.farming.experience} XP - Rank ${metricLeaders.skills.farming.rank}` },
            { name: 'Fishing', value: `${metricLeaders.skills.fishing.player.displayName} - ${metricLeaders.skills.fishing.experience} XP - Rank ${metricLeaders.skills.fishing.rank}` },
            { name: 'Hunter', value: `${metricLeaders.skills.hunter.player.displayName} - ${metricLeaders.skills.hunter.experience} XP - Rank ${metricLeaders.skills.hunter.rank}` },
            { name: 'Mining' , value: `${metricLeaders.skills.mining.player.displayName} - ${metricLeaders.skills.mining.experience} XP - Rank ${metricLeaders.skills.mining.rank}` },
            { name: 'Woodcutting', value: `${metricLeaders.skills.woodcutting.player.displayName} - ${metricLeaders.skills.woodcutting.experience} XP - Rank ${metricLeaders.skills.woodcutting.rank}` },
        )

    const productionHof = new EmbedBuilder()
        .setColor(0xFFCC00)
        .setTitle('Production skills')
        .addFields(
            { name: 'Cooking', value: `${metricLeaders.skills.cooking.player.displayName} - ${metricLeaders.skills.cooking.experience} XP - Rank ${metricLeaders.skills.cooking.rank}` },
            { name: 'Crafting', value: `${metricLeaders.skills.crafting.player.displayName} - ${metricLeaders.skills.crafting.experience} XP - Rank ${metricLeaders.skills.crafting.rank}` },
            { name: 'Fleching', value: `${metricLeaders.skills.fletching.player.displayName} - ${metricLeaders.skills.fletching.experience} XP - Rank ${metricLeaders.skills.fletching.rank}` },
            { name: 'Herblore', value: `${metricLeaders.skills.herblore.player.displayName} - ${metricLeaders.skills.herblore.experience} XP - Rank ${metricLeaders.skills.herblore.rank}` },
            { name: 'Runecrafting', value: `${metricLeaders.skills.runecrafting.player.displayName} - ${metricLeaders.skills.runecrafting.experience} XP - Rank ${metricLeaders.skills.runecrafting.rank}` },
            { name: 'Smithing', value: `${metricLeaders.skills.smithing.player.displayName} - ${metricLeaders.skills.smithing.experience} XP - Rank ${metricLeaders.skills.smithing.rank}` },
        )

    const utilityHof = new EmbedBuilder()
        .setColor(0xFFCC00)
        .setTitle('Utility skills')
        .addFields(
            { name: 'Agility', value: `${metricLeaders.skills.agility.player.displayName} - ${metricLeaders.skills.agility.experience} XP - Rank ${metricLeaders.skills.agility.rank}` },
            { name: 'Construction', value: `${metricLeaders.skills.construction.player.displayName} - ${metricLeaders.skills.construction.experience} XP - Rank ${metricLeaders.skills.construction.rank}` },
            { name: 'Firemaking', value: `${metricLeaders.skills.firemaking.player.displayName} - ${metricLeaders.skills.firemaking.experience} XP - Rank ${metricLeaders.skills.firemaking.rank}` },
            { name: 'Slayer', value: `${metricLeaders.skills.slayer.player.displayName} - ${metricLeaders.skills.slayer.experience} XP - Rank ${metricLeaders.skills.slayer.rank}` },
            { name: 'Thieving', value: `${metricLeaders.skills.thieving.player.displayName} - ${metricLeaders.skills.thieving.experience} XP - Rank ${metricLeaders.skills.thieving.rank}` },
        )

        return interaction.channel.send({ embeds: [header, overallHof, combatHof, gatheringHof, productionHof, utilityHof], files: [headerImg]}) + interaction.channel.send('Laatst bijgewerkt op: ' + new Date().toLocaleString());
    },
};

