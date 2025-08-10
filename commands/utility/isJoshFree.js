const {SlashCommandBuilder} = require("discord.js");

async function joshAvailability() {
    //fetch('')
}


module.exports = {
    data: new SlashCommandBuilder()
        .setName("is_josh_free")
        .setDescription("Check if Josh is free to play games."),

    async execute(interaction) {

        await interaction.reply("Josh is free to play games.");
    }
};