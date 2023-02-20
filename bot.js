const { Telegraf } = require('telegraf');

const bot = new Telegraf("6262522626:AAEDDeIK7eL4xtP_wfJRaLfeyEhrSMThRyo");
bot.start((ctx) => ctx.reply('Xush kelibsiz ushbu bot faqat ushbu linkda ishlaydi! https://voiceconvert.netlify.app/ '));
// bot.on("animation")
// bot.on('voice', (ctx) => log);
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));