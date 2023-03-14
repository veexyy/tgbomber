// актуален на 26/01/2023
// v 1.0.0
// массив с говном
const insults = [
    'даун',
    'дебил',
    'идиот', 
    'долбоёб', 
    'хуесос', 
    'аутист', 
    'дегенерат', 
    'хуерыга', 
    'тупорылый', 
    'ебанат', 
    'шизоид', 
    "еблан", 
    "уёбище", 
    "слепой", 
    "еблище", 
    "несчастное существо", 
    "негр", 
    "бессмысленное существо", 
    "и твой отец - ничто",
    "котак",
    "котакбас", 
    "котакжеме", 
    "шешен сыгин", 
    "пидорас",
    "пидр", 
    "пидрила", 
    "пидор", 
    "блядь", 
    "аутист", 
    "гидроцефал",
    'сын ебаной шлюхи',
    'сын хуйни',
    "кусок долбоёба",
    "сосунок",
    "лучше закрой своё ебало",
    "сыночек шлюхи",
    "каблук",
    "кусок говна",
    ];
   
// получение поля ввода
const inputField = document.querySelector('.input-message-input');

// получение кнопки отправки сообщения
const sendMessageButton = document.querySelectorAll('.btn-icon');
const toArrSendMessageButton = Array.from(sendMessageButton);
const sendButtonFromArray = toArrSendMessageButton[27];

setInterval(() => {
    // рандомизация оскорблений
        const insultsWord = insults[Math.floor(Math.random() * insults.length)]; 
    // проверка пользователя
        if (2 + 2 == 4) {
            inputField.textContent = "ты " + insultsWord; // inputField.innerHTML = 'Влад Чикулаев ' + insultsWord;
            sendButtonFromArray.click();
        }  else{
            console.log('something went wrong');
        }
}, 1000);
