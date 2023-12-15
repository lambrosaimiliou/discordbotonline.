const Discord = require('discord.js')
const client = Discord.Client()
const token = ("your token")

client.on('ready', () => {
  console.log("bot is ready")
});

client.login('token')
