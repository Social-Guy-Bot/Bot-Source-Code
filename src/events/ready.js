module.exports = (client) => {
  client.user.setActivity("_help", { type: "LISTENING" });
  console.log(`Logged in as ${client.user.tag}`);
};
