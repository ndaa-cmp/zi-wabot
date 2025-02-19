const { Events, Client, CommandHandler } = require("@mengkodingan/ckptw")
 const path = require("node:path")
const bot = new Client({
    printQRInTerminal: false,
    prefix: ".",
    usePairingCode: true,
    phoneNumber: "62856405754211",
    readIncommingMsg: true,
})

bot.ev.once(Events.ClientReady, (m) => {
    console.log(`ready at ${m.user.id}`);
});

const cmd = new CommandHandler(bot, path.resolve() + '/commands');
cmd.load()

bot.launch();