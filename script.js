let display = document.getElementById("display");
let micro_seconds="00",seconds="00",minutes="00";
let runner;
let start_once = false;
function run(){
    micro_seconds++;
    if(micro_seconds===100){
        micro_seconds=0;
        seconds++;
        if(seconds<10)
            seconds = `0${seconds}`;
    }
    if(seconds===60){
        seconds="00";
        minutes++;
        if(minutes<10)
            minutes = `0${minutes}`;
    }
    if(micro_seconds<10)
        micro_seconds = `0${micro_seconds}`;
    display.innerHTML = `${minutes}:${seconds}:${micro_seconds}`;
}
function start(){
    if(!start_once){
        runner = setInterval(run,10);
        start_once = true;
    }
}
function stop(){
    clearInterval(runner);
    start_once = false;
}
function reset(){
    micro_seconds = "00",seconds = "00",minutes = "00";
    clearInterval(runner);
    display.innerHTML = `${minutes}:${seconds}:${micro_seconds}`;
}
