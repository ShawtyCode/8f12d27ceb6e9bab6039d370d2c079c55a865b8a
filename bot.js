const discord = require("discord.js");

const bot = new discord.Client();

// add message as a parameter to your callback function
bot.on('message', function(message) {
    // Now, you can use the message variable inside
    if (message.content === "c!autobump") { 
        var interval = setInterval (function () {
            // use the message's channel (TextChannel) to send a new message
            message.channel.send("!disboard bump")
            .catch(console.error); // add error handling here
        }, 1 * 7200000);
        {
client.on('message', msg => {
    if (message.content === "c!check") {
    message.reply('**@Soul#8275 Ready.** To Start: **c!autobump **  -  **To Stop**: Remove the "autobump" permission and add it back again.');
    }
});


client.login(process.env.BOT_TOKEN);
