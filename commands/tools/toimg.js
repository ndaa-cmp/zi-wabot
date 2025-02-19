const { Cooldown, Ctx, italic, MessageType } = require("@mengkodingan/ckptw")

module.exports = {
    name: "toimage",
    code: async(ctx) => {
        try {
            const buff = await ctx.quoted.media.toBuffer();
            if(!buff) return ctx.reply(italic('❌ Reply ke sticker saat menggunakan command ini.'));

            ctx.reply({ image: buff, mimetype : "image/png" });
        } catch (err) {
            ctx.reply("Error! Server sedang sibuk!")
            console.log("[TOIMAGE ERR]", err)
        }
    }
}