const discord = require("discord.js");


const TOKEN = "MjI0MjAyMjE4MTkzMDI3MDcy.Dh_IjA.3KsO8apULPqgfmXKLti_RVg0kLI";

const bot = new discord.Client();

// add message as a parameter to your callback function
bot.on('message', function(message) {
    // Now, you can use the message variable inside
    if (message.content === "$loop") { 
        var interval = setInterval (function () {
            // use the message's channel (TextChannel) to send a new message
            message.channel.send("!disboard bump")
            .catch(console.error); // add error handling here
        }, 1 * 120000); 
    }
});


bot.login(TOKEN);
