const mongoose = require("mongoose")
const Discord = require("discord.js")
require("dotenv").config()
const TOKEN = "OTkxMDU2NDQ5Mzk4NTM4MjYw.GjHzvu.4Ofbyhaq6YC8EXfrG3sodfiPrrA7I9DdWWtFBw"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

let bot = {
    client
}

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
    console.log(`WARNING : MongoDB isn't connected to this bot yet! Make sure to do that!`)
})

const guildId = ""

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello! Hope you are having a great day fellow member!")
    }
})

const welcomeChannelId = "988081854475296830"

client.on("guildMemberAdd", (member) => {
    member.guild.channels.cache.get(welcomeChannelId).send(`<@${member.id}> Welcome to CLEMENTINO's BLOCK MARKET, we hope you have fun!`)
})

client.slashcommands = new Discord.Collection()

client.loadSlashCommands = (bot, reload) => require ("./handlers/slashcommands")(bot, reload)
client,loadSlashCommands(bot, false)



client.login(TOKEN)