const Discord = require("discord.js");
const client = new Discord.Client();
const ytdl = require("ytdl-core");
const request = require("request");
const fs = require("fs");
const getYouTubeID = require("get-youtube-id");
const fetchVideoInfo = require("youtube-info");

//var config = JSON.parse(fs.readFileSync('./settings.json', 'utf-8'));

//const yt_api_key = config.yt_api_key;
//const bot_controller = config.bot_controller;
//const prefix = config.prefix;
//const discord_token = config.discord_token

client.login(process.env.BOT_TOKEN);

client.on('ready', function () {
    console.log("I am ready for use!")
});
