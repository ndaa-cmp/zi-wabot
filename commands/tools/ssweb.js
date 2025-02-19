module.exports = {
    name: "ssweb",
    code:  async(ctx) => {
        try {
        const url = ctx
        .args.join(" ")
        if (!url.startsWith('http')) return ctx.reply(`Example: ${ctx._used.prefix}ssweb https://google.com`)
            const urls = 'http://image.thum.io/get/width/1900/crop/1000/fullpage/' + url
        ctx.reply({ image: { url: urls }, caption: url})
        } catch (error) {
    console.log(`SSWEB ERROR`, error)
    ctx.reply(`Error! server sedang sibuk!`)
    }
    }
}