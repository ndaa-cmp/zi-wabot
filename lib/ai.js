const Groq = require("groq-sdk")
const config = require("../config.js")

const client = new Groq({
    apiKey: config.api.groq, // This is the default and can be omitted
  });
  
  async function ai(query) {
    const chatCompletion = await client.chat.completions.create({
      messages: [{ role: 'user', content: query }],
      model: 'llama3-8b-8192',
    });
  
    return chatCompletion.choices[0].message.content
  }

module.exports = {
    ai
}