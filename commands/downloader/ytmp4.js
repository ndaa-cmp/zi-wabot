const fetch = require("node-fetch");
const fs = require("node:fs");
const path = require("node:path");
const { v4: uuidv4 } = require("uuid"); // Untuk membuat nama file unik

module.exports = {
    name: "ytmp4",
    code: async (ctx) => {
        try {
            const url = ctx.args.join(" ");
            if (!url.startsWith('http')) {
                return ctx.reply(`Example: ${ctx._used.prefix}ytmp4 url youtube`);
            }

            // Fetch video dari API
            const res = await fetch(`https://ytdownloader.nvlgroup.my.id/download?url=${url}&resolution=360`);
            const videoBuffer = await res.buffer();

            // Pastikan direktori temp ada
            const tempDir = path.join(__dirname, '../../temp');
            if (!fs.existsSync(tempDir)) {
                fs.mkdirSync(tempDir, { recursive: true }); // Buat direktori jika belum ada
            }

            // Simpan buffer ke file sementara dengan nama unik
            const fileName = `${uuidv4()}.mp4`; // Nama file unik
            const tempFilePath = path.join(tempDir, fileName);
            fs.writeFileSync(tempFilePath, videoBuffer);

            // Kirim file video menggunakan path
            ctx.reply({ video: { url: tempFilePath }, caption: "done" });

            // Hapus file sementara setelah dikirim
            setTimeout(() => {
                fs.unlink(tempFilePath, (err) => {
                    if (err) console.error(`Failed to delete file: ${err}`);
                });
            }, 10000); // Hapus file setelah 5 detik
        } catch (error) {
            console.log(error);
            ctx.reply(`YTMP4 ERROR`);
        }
    }
};