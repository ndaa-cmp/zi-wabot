const { Cooldown, ctx } = require(`@mengkodingan/ckptw`)

module.exports = {
    name: "ping",
    code: async(ctx) => {
        try {
            ctx.reply({ text: `${Date.now() - (ctx.msg.messageTimestamp * 1000)}ms` })
        } catch (err) {
            ctx.reply(`Error! Server Sedang Sibuk`)
            console.log("[PING ERR]", err)
        }
    }
}