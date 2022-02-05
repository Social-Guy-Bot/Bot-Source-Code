const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const topic = args[0];

  const helpEmbed = new discord.MessageEmbed()
    .setColor("#F773D9")
    .setTitle("Social Guy Help Interface")
    .setDescription(
      "These are all my help modules, if you want detailed info on each command type `_website` command"
    )
    .addField("Stats :bar_chart:", "`_help stats`", true)
    .addField("Info :information_source:", "`_help info`", true)
    .addField("Utility :gear:", "`_help utility`", true)
    .setFooter({
      text: "Use _ prefix before every command",
    })
    .setTimestamp();

  const statsEmbed = new discord.MessageEmbed()
    .setColor("#F773D9")
    .setTitle("Stats commands")
    .setDescription(
      "`worldstats`, `countrystats`, `continentstats`, `headlines`"
    )
    .setFooter({
      text: "Use _ prefix before every command",
    })
    .setTimestamp();

  const infoEmbed = new discord.MessageEmbed()
    .setColor("#F773D9")
    .setTitle("Info commands")
    .setDescription("`symptoms`")
    .setFooter({
      text: "Use _ prefix before every command",
    })
    .setTimestamp();

  const utilityEmbed = new discord.MessageEmbed()
    .setColor("#F773D9")
    .setTitle("Utility commands")
    .setDescription(
      "`info`, `ping`, `invite`, `vote`, `support`, `website`, `help`"
    )
    .setFooter({
      text: "Use _ prefix before every command",
    })
    .setTimestamp();

  if (!topic || topic.toLowerCase() === "modules") {
    message.reply({
      embeds: [helpEmbed],
    });
  } else if (topic.toLowerCase() === "stats") {
    message.reply({
      embeds: [statsEmbed],
    });
  } else if (topic.toLowerCase() === "info") {
    message.reply({
      embeds: [infoEmbed],
    });
  } else if (topic.toLowerCase() === "utility") {
    message.reply({
      embeds: [utilityEmbed],
    });
  } else {
    message.reply({
      content:
        "This help module doesn't exist.\nModules which exist are - `stats, info and utility`",
    });
  }
};

module.exports.config = {
  name: "help",
  aliases: ["commands", "commandshelp"],
};
