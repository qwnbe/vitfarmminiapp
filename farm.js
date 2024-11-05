const TelegramBot = require('node-telegram-bot-api');

// Замените на ваш токен от BotFather
const TOKEN = '8052001992:AAEdOR2PZucj5cojUuWyduYft4omFeskKl0';
const bot = new TelegramBot(TOKEN, { polling: true });

// Команда для отправки кнопки с Web App
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // Отправляем сообщение с кнопкой Web App
  bot.sendMessage(chatId, 'Открыть мини-приложение:', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Открыть Mini App',
            web_app: { url: `http://c1.netcore.group:5001` } // URL для Web App
          }
        ]
      ]
    }
  });
});

