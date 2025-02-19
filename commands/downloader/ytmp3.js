const axios = require("axios")

module.exports = {
    name: "ytmp3",
    code: async(ctx) => {
        try {
            if(!ctx.args.length) return ctx.reply(`example: ${ctx._used.prefix}ytmp3 link yt`)
            let url = new URL(ctx.args[0]);

            let body = new URLSearchParams();
            body.set('url', url.href);

            let { data } = await axios.post('https://www.youtubemp3.ltd/convert', body, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            });

            await ctx.reply({ audio: { url: data.link }, mimetype: 'audio/mp4' });
        } catch (err) {
            ctx.reply(generateMessage('error', { ctx }));
            console.log("[YTMP3 ERR]", err)
        }
    }
}