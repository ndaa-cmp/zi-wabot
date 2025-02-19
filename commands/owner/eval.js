const util = require("util")
const config = require("../../config.js")

module.exports = {
    name: "e",
    code: async (ctx) => {
      try {
        const isCreator = isOwner = [config.owner.number].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(ctx._sender.jid)
        if (!isCreator) return ctx.reply(`Lu Bukan Owner`)
        var evaled = await eval(ctx.args.join(" "));
        return ctx.reply({
          text: util.inspect(evaled, { depth: 0 }),
        });
      } catch (err) {
        return ctx.reply({ text: `${err}!` });
      }
    },
}