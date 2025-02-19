const { ai } = require("../../lib/ai.js")

module.exports = {
    name: "ai",
    code: async(ctx) => {
        try {
            const text = ctx.args.join(" ")
            if(!text) return ctx.reply(`Example: ${ctx._used.prefix}ai query`)
            const res = await ai(text)
        ctx.reply(res)
        } catch (error) {
            ctx.reply("Error!, server sedang sibuk!")
            console.log(`[SYSTEM ERROR] at [AI]`, error)
        }
    }
}