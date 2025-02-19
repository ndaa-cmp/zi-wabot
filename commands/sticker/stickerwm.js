
const {
    quote,
    italic
} = require("@mengkodingan/ckptw");
const {
    Sticker,
    StickerTypes
} = require("wa-sticker-formatter");

module.exports = {
    name: "stickerwm",
    code: async (ctx) => {
        const input = ctx.args.join(" ") || null;

        if(!input) return ctx.reply(italic('❌ Reply ke sticker saat menggunakan command ini.'));

        try {
            const buffer = await ctx.msg.media.toBuffer() || await ctx.quoted?.media.toBuffer();
            if(!buffer) return ctx.reply(italic('❌ Reply ke media atau jadikan sebagai caption.'));
            const [packname, author] = input.split("|");
            const result = new Sticker(buffer, {
                pack: packname || "",
                author: author || "",
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
