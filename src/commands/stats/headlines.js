const config = require("../../../config.json");
const discord = require("discord.js");
const axios = require("axios");

module.exports.run = async (client, message, args) => {
  const url = `https://newsapi.org/v2/top-headlines?q=omicron&sortBy=popularity&apiKey=${config.news_api_key}`;
  const banner = "https://i.ibb.co/74YcZhT/Social-Guy-Banner.png";

  axios
    .get(url)
    .then((res) => {
      const headlinesEmbed = new discord.MessageEmbed()
        .setColor("#f773d9")
        .setTitle("Covid-19 Global Headlines")
        .addField(
          `${res.data.articles[0].title}`,
          `${res.data.articles[0].description}`,
          false
        )
        .addField(
          `${res.data.articles[2].title}`,
          `${res.data.articles[2].description}`,
          false
        )
        .addField(
          `${res.data.articles[4].title}`,
          `${res.data.articles[4].description}`,
          false
        )
        .addField(
          `${res.data.articles[5].title}`,
          `${res.data.articles[5].description}`,
          false
        )
        .addField(
          `${res.data.articles[8].title}`,
          `${res.data.articles[8].description}`,
          false
        )
        .setImage(banner)
        .setFooter({
          text: "Data from News API",
        })
        .setTimestamp();

      message.reply({
        embeds: [headlinesEmbed],
      });
    })
    .catch((err) => {
      const errEmbed = new discord.MessageEmbed()
        .setColor("RED")
        .setDescription(
          "Headlines not available at the moment, try again later."
        );

      message.reply({
        embeds: [errEmbed],
      });
    });
};

module.exports.config = {
  name: "headlines",
  aliases: ["news"],
};
