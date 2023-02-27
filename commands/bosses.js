const { EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const { WOMClient } = require('@wise-old-man/utils');
const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');

const client = new WOMClient({
    apiKey: 'clelbu2bs000008ldha355qvz',
    userAgent: 'nickymf#6435'
  });

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bosses')
		.setDescription('Hall of fame van bosses.')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	async execute(interaction) {
        const group = await client.groups.getGroupStatistics(4130);
        const metricLeaders = group.metricLeaders; 

        const headerImg = new AttachmentBuilder('assets/hall_of_fame_bosses.png');

        const header = new EmbedBuilder()
            .setImage('attachment://hall_of_fame_bosses.png')

    const slayerBossHof = new EmbedBuilder()
    //set color to green via hex code (0xRRGGBB)
        .setColor(0x57F287)
        .setTitle('Slayer Bosses')
        .addFields(
            { name: 'Abyssal Sire', value: `${metricLeaders.bosses.abyssal_sire.player.displayName} - ${metricLeaders.bosses.abyssal_sire.kills} KC` },
            { name: 'Grotesque Guardians', value: `${metricLeaders.bosses.grotesque_guardians.player.displayName} - ${metricLeaders.bosses.grotesque_guardians.kills} KC` },
            { name: 'Cerberus', value: `${metricLeaders.bosses.cerberus.player.displayName} - ${metricLeaders.bosses.cerberus.kills} KC` },
            { name: 'Alchemical Hydra', value: `${metricLeaders.bosses.alchemical_hydra.player.displayName} - ${metricLeaders.bosses.alchemical_hydra.kills} KC` },
            { name: 'Thermonuclear Smoke Devil', value: `${metricLeaders.bosses.thermonuclear_smoke_devil.player.displayName} - ${metricLeaders.bosses.thermonuclear_smoke_devil.kills} KC` },
            { name: 'Kraken', value: `${metricLeaders.bosses.kraken.player.displayName} - ${metricLeaders.bosses.kraken.kills} KC` },
        )

    const wildernessBossHof = new EmbedBuilder()
        .setColor(0x57F287)
        .setTitle('Wilderness Bosses')
        .addFields(
            { name: 'Callisto', value: `${metricLeaders.bosses.callisto.player.displayName} - ${metricLeaders.bosses.callisto.kills} KC` },
            { name: 'Venenatis', value: `${metricLeaders.bosses.venenatis.player.displayName} - ${metricLeaders.bosses.venenatis.kills} KC` },
            { name: 'Vetion', value: `${metricLeaders.bosses.vetion.player.displayName} - ${metricLeaders.bosses.vetion.kills} KC` },
            { name: 'Scorpia', value: `${metricLeaders.bosses.scorpia.player.displayName} - ${metricLeaders.bosses.scorpia.kills} KC` },
            { name: 'Chaos fanatic', value: `${metricLeaders.bosses.chaos_fanatic.player.displayName} - ${metricLeaders.bosses.chaos_fanatic.kills} KC` },
            { name: 'Chaos elemental', value: `${metricLeaders.bosses.chaos_elemental.player.displayName} - ${metricLeaders.bosses.chaos_elemental.kills} KC` },
            { name: 'Crazy archaeologist', value: `${metricLeaders.bosses.crazy_archaeologist.player.displayName} - ${metricLeaders.bosses.crazy_archaeologist.kills} KC` },
            { name: 'King black dragon', value: `${metricLeaders.bosses.king_black_dragon.player.displayName} - ${metricLeaders.bosses.king_black_dragon.kills} KC` },
        )

    const sporadicBossHof = new EmbedBuilder()
        .setColor(0x57F287)
        .setTitle('Sporadic Bosses')
        .addFields(
            { name: 'Obor', value: `${metricLeaders.bosses.obor.player.displayName} - ${metricLeaders.bosses.obor.kills} KC` },
            { name: 'Bryophyta', value: `${metricLeaders.bosses.bryophyta.player.displayName} - ${metricLeaders.bosses.bryophyta.kills} KC` },
            { name: 'Mimic', value: `${metricLeaders.bosses.mimic.player.displayName} - ${metricLeaders.bosses.mimic.kills} KC` },
            { name: 'Hespori', value: `${metricLeaders.bosses.hespori.player.displayName} - ${metricLeaders.bosses.hespori.kills} KC` },
            { name: 'Skotizo', value: `${metricLeaders.bosses.skotizo.player.displayName} - ${metricLeaders.bosses.skotizo.kills} KC` },
        )

    const skillingBossHof = new EmbedBuilder()
        .setColor(0x57F287)
        .setTitle('Skilling Bosses')
        .addFields(
            { name: 'Wintertodt', value: `${metricLeaders.bosses.wintertodt.player.displayName} - ${metricLeaders.bosses.wintertodt.kills} KC` },
            { name: 'Tempoross', value: `${metricLeaders.bosses.tempoross.player.displayName} - ${metricLeaders.bosses.tempoross.kills} KC` },
            { name: 'Zalcano', value: `${metricLeaders.bosses.zalcano.player.displayName} - ${metricLeaders.bosses.zalcano.kills} KC` },
        )

    const raidsBossHof = new EmbedBuilder()
        .setColor(0x57F287)
        .setTitle('Raids')
        .addFields(
            { name: 'Chambers of Xeric', value: `${metricLeaders.bosses.chambers_of_xeric.player.displayName} - ${metricLeaders.bosses.chambers_of_xeric.kills} KC` },
            { name: 'Chambers of Xeric: Challenge Mode', value: `${metricLeaders.bosses.chambers_of_xeric_challenge_mode.player.displayName} - ${metricLeaders.bosses.chambers_of_xeric_challenge_mode.kills} KC` },
            { name: 'Theatre of Blood', value: `${metricLeaders.bosses.theatre_of_blood.player.displayName} - ${metricLeaders.bosses.theatre_of_blood.kills} KC` },
            { name: 'Theatre of Blood: Hard Mode', value: `${metricLeaders.bosses.theatre_of_blood_hard_mode.player.displayName} - ${metricLeaders.bosses.theatre_of_blood_hard_mode.kills} KC` },
            { name: 'Tombs of Amascut', value: `${metricLeaders.bosses.tombs_of_amascut.player.displayName} - ${metricLeaders.bosses.tombs_of_amascut.kills} KC` },
            { name: 'Tombs of Amascut: Expert Mode', value: `${metricLeaders.bosses.tombs_of_amascut_expert.player.displayName} - ${metricLeaders.bosses.tombs_of_amascut_expert.kills} KC` },
        )

    const minigameBossHof = new EmbedBuilder()
        .setColor(0x57F287)
        .setTitle('Minigames')
        .addFields(
            { name: 'The Gauntlet', value: `${metricLeaders.bosses.the_gauntlet.player.displayName} - ${metricLeaders.bosses.the_gauntlet.kills} KC` },
            { name: 'Corrupted Gauntlet', value: `${metricLeaders.bosses.the_corrupted_gauntlet.player.displayName} - ${metricLeaders.bosses.the_corrupted_gauntlet.kills} KC` },
            { name: 'Jad', value: `${metricLeaders.bosses.tztok_jad.player.displayName} - ${metricLeaders.bosses.tztok_jad.kills} KC` },
            { name: 'Zuk', value: `${metricLeaders.bosses.tzkal_zuk.player.displayName} - ${metricLeaders.bosses.tzkal_zuk.kills} KC` },
        )

    const godwarsBossHof = new EmbedBuilder()
        .setColor(0x57F287)
        .setTitle('Godwars')
        .addFields(
            { name: 'Kreearra', value: `${metricLeaders.bosses.kreearra.player.displayName} - ${metricLeaders.bosses.kreearra.kills} KC` },
            { name: 'General Graardor', value: `${metricLeaders.bosses.general_graardor.player.displayName} - ${metricLeaders.bosses.general_graardor.kills} KC` },
            { name: 'Commander Zilyana', value: `${metricLeaders.bosses.commander_zilyana.player.displayName} - ${metricLeaders.bosses.commander_zilyana.kills} KC` },
            { name: 'Kril Tsutsaroth', value: `${metricLeaders.bosses.kril_tsutsaroth.player.displayName} - ${metricLeaders.bosses.kril_tsutsaroth.kills} KC` },
            { name: 'Nex', value: `${metricLeaders.bosses.nex.player.displayName} - ${metricLeaders.bosses.nex.kills} KC` },
        )
    
    const otherBossHof = new EmbedBuilder()
        .setColor(0x57F287)
        .setTitle('Other Bosses')
        .addFields(
            { name: 'Barrows', value: `${metricLeaders.bosses.barrows_chests.player.displayName} - ${metricLeaders.bosses.barrows_chests.kills} KC` },
            { name: 'Giant Mole', value: `${metricLeaders.bosses.giant_mole.player.displayName} - ${metricLeaders.bosses.giant_mole.kills} KC` },
            { name: 'Deranged Archaeologist', value: `${metricLeaders.bosses.deranged_archaeologist.player.displayName} - ${metricLeaders.bosses.deranged_archaeologist.kills} KC` },
            { name: 'Dagannoth Prime', value: `${metricLeaders.bosses.dagannoth_prime.player.displayName} - ${metricLeaders.bosses.dagannoth_prime.kills} KC` },
            { name: 'Dagannoth Rex', value: `${metricLeaders.bosses.dagannoth_rex.player.displayName} - ${metricLeaders.bosses.dagannoth_rex.kills} KC` },
            { name: 'Dagannoth Supreme', value: `${metricLeaders.bosses.dagannoth_supreme.player.displayName} - ${metricLeaders.bosses.dagannoth_supreme.kills} KC` },
            { name: 'Kalphite Queen', value: `${metricLeaders.bosses.kalphite_queen.player.displayName} - ${metricLeaders.bosses.kalphite_queen.kills} KC` },
            { name: 'Sarachnis', value: `${metricLeaders.bosses.sarachnis.player.displayName} - ${metricLeaders.bosses.sarachnis.kills} KC` },
            { name: 'Zulrah', value: `${metricLeaders.bosses.zulrah.player.displayName} - ${metricLeaders.bosses.zulrah.kills} KC` },
            { name: 'Vorkath', value: `${metricLeaders.bosses.vorkath.player.displayName} - ${metricLeaders.bosses.vorkath.kills} KC` },
            { name: 'Phantom Muspah', value: `${metricLeaders.bosses.phantom_muspah.player.displayName} - ${metricLeaders.bosses.phantom_muspah.kills} KC` },
            { name: 'Corporeal Beast', value: `${metricLeaders.bosses.corporeal_beast.player.displayName} - ${metricLeaders.bosses.corporeal_beast.kills} KC` },
            { name: 'The Nightmare', value: `${metricLeaders.bosses.nightmare.player.displayName} - ${metricLeaders.bosses.nightmare.kills} KC` },
            { name: 'Phosani\'s Nightmare', value: `${metricLeaders.bosses.phosanis_nightmare.player.displayName} - ${metricLeaders.bosses.phosanis_nightmare.kills} KC` },
        )

        return interaction.channel.send({ embeds: [header, slayerBossHof, wildernessBossHof, sporadicBossHof, skillingBossHof, raidsBossHof, minigameBossHof, godwarsBossHof], files: [headerImg]}) + interaction.channel.send('Laatst bijgewerkt op: ' + new Date().toLocaleString());
    },
};

