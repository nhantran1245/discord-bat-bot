require("dotenv").config();
const { Client, Intents } = require("discord.js");
const client = new Client({
    Intents:[
        Intents.FLAGS.GUILDS,//adds server functionality
        Intents.FLAGS.GUILD_MESSAGES //gets messages from our bot.
    ]
});

client.once("ready", () =>{
    console.log("BOT IS ONLINE"); //message when bot is online
});

client.on('message',
    (messages) => {
        if (messages.content.toLocaleLowerCase() === 'hello') {
            messages.channel.send('hello ' + messages.author.username);
            const broadcast = client.voice.createBroadcast();
            const channelId = msg.member.voice.channelID;
            const channel = client.channels.cache.get(channelId);
            channel.join().then(connection => {
                broadcast.play(discordTTS.getVoiceStream('test 123'));
                const dispatcher = connection.play(broadcast);
            });
        }
    }
)
client.login(process.env.TOKEN);