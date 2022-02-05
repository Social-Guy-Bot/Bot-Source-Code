const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const symptomsEmbed = new discord.MessageEmbed()
    .setColor("#F773D9")
    .setTitle("Covid-19 Symptoms")
    .setDescription("Here are some symptoms of Covid-19")
    .addFields(
      {
        name: "Most common symptoms",
        value: "• Fever\n• Cough\n• Tiredness\n• Loss of taste or smell",
        inline: false,
      },
      {
        name: "Less common symptoms",
        value:
          "• Sore Throat\n• Headache\n• Aches and pains\n• Diarrhoea\n• Rashes on skin\n• Red or irritated eyes",
        inline: false,
      },
      {
        name: "Serious symptoms",
        value:
          "• Difficulty in breathing or shortness of breath\n• Loss of speech or mobility, or confusion\n• Chest pain",
        inline: false,
      }
    )
    .setFooter({
      text: "Seek immediate medical attention if you have serious symptoms",
    })
    .setTimestamp();

  const symptomsButton = new discord.MessageButton()
    .setLabel("More Info")
    .setStyle("LINK")
    .setURL("https://www.who.int/health-topics/coronavirus#tab=tab_3");

  const row = new discord.MessageActionRow().addComponents(symptomsButton);

  message.reply({
    embeds: [symptomsEmbed],
    components: [row],
  });
};

module.exports.config = {
  name: "symptoms",
  aliases: [],
};
