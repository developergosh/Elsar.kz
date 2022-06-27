var time = 0;
var running = 0;


let
    TimerShowStartBtn = document.getElementById('start-show'),
    TimerShowPanel = document.getElementById('timer-show');
    EndShowButton = document.getElementById('End-pokaz');
    EndShowText = document.getElementById('Info-End-show');
    OwnerTimePokaz = document.getElementById('owner-pokaz-time-text');



function increment(){
    if(running == 1){
        setTimeout(function(){
            time++;
            var mins = Math.floor(time/10/60);
            var secs = Math.floor(time/10 % 60);
            var hours = Math.floor(time/10/60/60);
            if(mins < 10){
                mins = "0" + mins;
            }
            if(secs < 10){
                secs = "0" + secs;
            }
            TimerShowPanel.innerHTML = hours + ":" + mins + ":" + secs;
            increment();
        },100)
    }
}


// Начать показ

TimerShowStartBtn.addEventListener('click', () => {
        SoundClick.play()
        TimerShowStartBtn.style.display = 'none',
        InfoStartShow.style.display = 'flex',
        TimerShowPanel.style.display = 'flex',
        TimerShowPanel.style.fontWeight = 'bold';
        HelperText.innerText = "После завершения нажмите кнопку - 'Завершить показ'";
    function startPause(){
        if(running == 0){
            running = 1;
            increment();
        }
        else{
            running = 0;
        }
    }
    startPause();

},);




EndShowButton.addEventListener('click', () => {
    SoundMessage.play();
    TimerShowStartBtn.style.color = 'black';
    running = 0;
    OwnerInfoText.style.display ='flex'
    OwnerInfoTextRentStart.style.display ='flex'
    OwnerInfoText.innerText =  items[0];
    OwnerTimePokaz.style.display = 'flex';
    OwnerTimePokaz.style.fontWeight = 'bold';
    OwnerTimePokaz.innerText = 'Время показа составило:  ' +TimerShowPanel.innerText;
    EndShowText.style.display = 'flex';
    EndShowButton.style.display = 'none';
    HelperText.innerText = "Поздравляем! Вы успешно освоили функцию показа номера";
    HelperTextOwner.innerText ="Владелец получил отчет о показе номера";
},);





/*let
    TimerShowStartBtn = document.getElementById('start-show'),
    startDate = new Date("Dec 31, 2030 5:00").getTime();
    TimerShowPanel = document.getElementById('timer-show');


let x = setInterval(function() {

    // Получаем текущее время в миллисекундах
    let now = new Date().getTime();

    // Узнаем разницу во времени, между текущей даты и конечной даты
    let diff = (startDate - now);

    // Считаем дни, часы, минуты и секунды
    let minutes = Math.floor((diff % ((1000 * 60 * 60)/2)/1.5) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Отображаем результат в блоке с id="timer-show"
    TimerShowPanel.innerHTML = minutes + "м " + seconds + "с ";

    // Если время истекло, то вместо таймера выводим некий текст.
    if (diff < 0) {
        clearInterval(x);
        document.getElementById("timer-show").innerHTML = "сервисная поддержка сайта закончилась";
    }
}, 1000)
*/
// Обновляем таймер каждую секунду




