const config = require("../../config.js")
const ssweb = require("../tools/ssweb.js")
module.exports = {
    name: "menu",
    code: async(ctx) => {
        try {
            const textmenu = `
            *${config.bot.name}*

*BOT INFO*
Owner Name: ${config.owner.name}
Bot Name: ${config.bot.name}
Response Time: ${Date.now() - (ctx.msg.messageTimestamp * 1000)}ms

*General*
${ctx._used.prefix}menu
${ctx._used.prefix}ping

*AI*
${ctx._used.prefix}ai

*Downloader*
${ctx._used.prefix}tiktok
${ctx._used.prefix}ytmp4
${ctx._used.prefix}ytmp3

*Sticker*
${ctx._used.prefix}sticker
${ctx._used.prefix}stickerwm

*Tools*
${ctx._used.prefix}toimage
${ctx._used.prefix}ssweb`
ctx.reply(textmenu)
        } catch (error) {
            ctx.reply(`Error! server sedang sibuk`)
            console.log(`ERROR`)
        }
    }
}