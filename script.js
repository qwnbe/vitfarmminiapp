// Переменные для хранения состояния
let count = 0;
const user_id = Telegram.WebApp.initDataUnsafe.user?.id; // Получаем user_id пользователя

// Обработка нажатия кнопки
document.addEventListener("DOMContentLoaded", () => {
  const counterDisplay = document.getElementById("counter");
  const clickButton = document.getElementById("clickButton");
  const resetButton = document.getElementById("resetButton");

  // Функция обновления счётчика
  function updateCounter() {
    counterDisplay.textContent = count;
  }

  // Функция отправки значения count и user_id на сервер
  function sendCountToServer() {
    fetch('/update-money', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user_id: user_id, count: count })
    })
      .then(response => response.json())
      .then(data => {
        console.log('Сервер ответил:', data);
      })
      .catch(error => {
        console.error('Ошибка при отправке данных на сервер:', error);
      });
  }

  // Кнопка "Нажми меня" увеличивает счётчик
  clickButton.addEventListener("click", () => {
    count++;
    updateCounter();
    sendCountToServer(); // Отправка значения на сервер
  });


  // Инициализация WebApp API
  Telegram.WebApp.ready();
});
