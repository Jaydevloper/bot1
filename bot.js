const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.secretkey);
bot.start((ctx) => ctx.reply('Xush kelibsiz ushbu bot faqat ushbu linkda ishlaydi! https://voiceconvert.netlify.app/ '));
// bot.on("animation")
// bot.on('voice', (ctx) => log);
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));