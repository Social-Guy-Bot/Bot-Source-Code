const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const infoEmbed = new discord.MessageEmbed()
    .setColor("#F773D9")
    .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
    .setTitle("Social Guy Info")
    .setDescription("Here's some basic information about myself")
    .addField("My Prefix", "_", false)
    .addField("My Usertag", "Social Guy#7451", false)
    .addField(
      "My Developer's Usertag",
      "<@787019465568419871>\n<@823429083110441030>",
      false
    )
    .addField("I was developed on", "May 17th 2021")
    .setFooter({
      text: "Invite me to your server by using the _invite command",
    })
    .setTimestamp();

  const inviteButton = new discord.MessageButton()
    .setLabel("Invite Me")
    .setStyle("LINK")
    .setURL("https://bit.ly/3HEea2Y");

  const voteButton = new discord.MessageButton()
    .setLabel("Vote Me on top.gg")
    .setStyle("LINK")
    .setURL("https://bit.ly/3JJbtz7");

  const supportButton = new discord.MessageButton()
    .setLabel("Join my Support Server")
    .setStyle("LINK")
    .setURL("https://bit.ly/3JKaqij");

  const buttonRow = new discord.MessageActionRow().addComponents(
    inviteButton,
    voteButton,
    supportButton
  );

  message.reply({
    embeds: [infoEmbed],
    components: [buttonRow],
  });
};

module.exports.config = {
  name: "info",
  aliases: ["socialguyinfo"],
};
