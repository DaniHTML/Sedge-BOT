const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
console.log(`${bot.user.username} has started, and is Online!`);
bot.user.setGame("http://sedge.pw/");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let arrgs = messageArray.slice(1);

  if(cmd === `${prefix}help`){
    return message.channel.send(":grey_question: `Please use a known command.`");
  }
})

bot.login(botconfig.token);
