const {
    italic,
    quote
} = require("@mengkodingan/ckptw");
const {
    Sticker,
    StickerTypes
} = require("wa-sticker-formatter");
const config = require("../../config.js")
module.exports = {
    name: "sticker",
    code: async (ctx) => {
        const msgType = ctx.getMessageType();
        try {
            const buffer = await ctx.msg.media.toBuffer() || await ctx.quoted?.media.toBuffer();
            if(!buffer) return ctx.reply(italic('❌ Reply ke media atau jadikan sebagai caption.'));
            const result = new Sticker(buffer, {
                pack: config.sticker.pack,
                author: config.sticker.author,
                type: StickerTypes.FULL,
                categories: ["🌕"],
                id: ctx.id,
                quality: 50
            });

            return await ctx.reply(await result.toMessage());
        } catch (error) {
            console.log(`Error: ${error}`);
            return await ctx.reply(quote(`Error! server sedang sibuk!`));
        }
    }
};