// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");

// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";

btn.addEventListener('click', () => {
  // при нажатии на первую кнопку
  // работайте с clonedBtn
  // ваш код начинается здесь
  
  // Создаем новую кнопку
  const newBtn = document.createElement('button');
  newBtn.id = 'magic-btn-2';
  newBtn.textContent = 'Я изменю тебя';
  newBtn.style.backgroundColor = '#a78b71';
  newBtn.style.color = 'white';
  
  // Добавляем новую кнопку после клика на кнопку "Нажми на меня!"
  document.body.appendChild(newBtn);
  
  // создаем EventListener для новой кнопки
  newBtn.addEventListener('click', () => {
    // Поменяем стили кнопки "Нажми на меня" при клике на кнопку "Я изменю тебя"
    btn.style.backgroundColor = '#9c4a1a';
    btn.style.color = 'black';
  });
});

// создаем EventListener для второй кнопки
clonedBtn.addEventListener('click', () => {
  alert("Second button clicked!");
});