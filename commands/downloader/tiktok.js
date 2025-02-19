const axios = require("axios")
const { bold } = require("@mengkodingan/ckptw")
module.exports = {
    name: "tiktok",
    code: async(ctx) => {
        try {
            const url = ctx.args.join(" ")
            if(!url) return ctx.reply(`Example: ${ctx._used.prefix}tiktok url tiktok`)

            let { data } = await axios('https://api.tiklydown.eu.org/api/download?url=' + url);

            let caption = `${data.title}
                    
            👍 ${bold(data.stats.likeCount + " Likes")}
            🔁 ${bold(data.stats.shareCount + " Shares")}
            💬 ${bold(data.stats.commentCount + " Comments")}
            🔄️ ${bold(data.stats.playCount + " Views")}
            🔖 ${bold(data.stats.saveCount + " Saves")}`;

            if(!data.images && !data.video) return ctx.reply(`❌ Video atau foto tidak ditemukan.`)
                if (data.video) {
                    // Mengunduh thumbnail video
                    const { data: cover } = await axios.get(data.video.origin_cover, {
                        responseType: 'arraybuffer'
                    });
                
                    // Mengirim video dengan thumbnail
                    ctx.reply({
                        video: { url: data.video.noWatermark },
                        caption,
                        jpegThumbnail: cover
                    });
                } else if (data.images) {
                    // Mengirim semua gambar dalam array
                    await Promise.all(data.images.map(async (img) => {
                        await ctx.sendMessage(ctx.id, {
                            image: { url: img.url },
                            jpegThumbnail: ''
                        });
                    }));
                }
        } catch (error) {
            ctx.reply(`Error! Server Sedang Sibuk!`)
            console.log(`ERROR`, error)
        }
    }
}