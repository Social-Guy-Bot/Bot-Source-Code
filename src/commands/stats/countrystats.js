const discord = require("discord.js");
const axios = require("axios");

module.exports.run = async (client, message, args) => {
  const country = args.join(" ");
  const url = `https://disease.sh/v3/covid-19/countries/${country}?strict=true`;
  const banner = "https://i.ibb.co/74YcZhT/Social-Guy-Banner.png";

  if (!country) {
    const errEmbed = new discord.MessageEmbed()
      .setColor("RED")
      .setDescription(
        "Please enter the country name to get it's data.\nCorrect Usage: `_countrystats [country name]`"
      );

    message.reply({
      embeds: [errEmbed],
    });
  } else {
    axios
      .get(url)
      .then((res) => {
        const countrystatsEmbed = new discord.MessageEmbed()
          .setColor("#F773D9")
          .setTitle(`${res.data.country}\'s Covid-19 Data`)
          .setDescription(
            "Data may vary from different sources, my data gets updated every **10 minutes**"
          )
          .addField("Total Cases", `${res.data.cases.toLocaleString()}`, true)
          .addField(
            "Total Recovered",
            `${res.data.recovered.toLocaleString()}`,
            true
          )
          .addField("Total Deaths", `${res.data.deaths.toLocaleString()}`, true)
          .addField(
            "Today Cases",
            `${res.data.todayCases.toLocaleString()}`,
            true
          )
          .addField(
            "Today Recovered",
            `${res.data.todayRecovered.toLocaleString()}`,
            true
          )
          .addField(
            "Today Deaths",
            `${res.data.todayDeaths.toLocaleString()}`,
            true
          )
          .addField("Active Cases", `${res.data.active.toLocaleString()}`, true)
          .addField(
            "Critical Cases",
            `${res.data.critical.toLocaleString()}`,
            true
          )
          .addField(
            "Total Tests Done",
            `${res.data.tests.toLocaleString()}`,
            true
          )
          .setImage(banner)
          .setFooter({
            text: "Data from  Worldometers",
          })
          .setTimestamp();

        message.reply({
          embeds: [countrystatsEmbed],
        });
      })
      .catch(() => {
        const errEmbed2 = new discord.MessageEmbed()
          .setColor("RED")
          .setDescription("Country doesn't exist or doesn't have any cases.");

        message.reply({
          embeds: [errEmbed2],
        });
      });
  }
};

module.exports.config = {
  name: "countrystats",
  aliases: ["country"],
};
