const timeElment = document.getElementById('time');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
 
let elapsed = 0;

let intervalId = null;

function updateTime(){
    const millisecond = elapsed % 1000;
    const second = Math.floor(elapsed / 1000) % 60;
    const minute = Math.floor(elapsed / (1000*60)) % 60;
    const hour = Math.floor(elapsed /(1000*60*60)) % 60;

    const millisecondString = millisecond.toString().padStart(3,'0');
    const secondString = second.toString().padStart(2,'0');
    const minuteString = minute.toString().padStart(2,'0');
    const hourString = hour.toString().padStart(2,'0');

    timeElment.innerHTML = `${hourString}:${minuteString}:${secondString}:${millisecondString}`
}

start.addEventListener('click',function(e){
    if(intervalId !== null){ return; }
    let pre = new Date();
    intervalId = setInterval(function(){
        const now = new Date();
        elapsed += now - pre;
        pre = now;
        updateTime();
    },10)
});

stop.addEventListener('click',function(e){
    clearInterval(intervalId);
    intervalId = null;
});

reset.addEventListener('click',function(e){
    elapsed = 0;
    updateTime();
});
