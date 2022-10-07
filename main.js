const counter = document.getElementById("counter");
var count=0;
var stopedTime=true;

function startCounter(){
    if(stopedTime==true)
    {
        stopedTime=false;
        timerCycle();
    }
}

function stopCounter(){
    if(stopedTime==false){
        stopedTime=true
    }
}

function resetCounter(){
    counter.innerHTML="";
    stopedTime=true;
    count=0;
}

function timerCycle(){
    if(stopedTime==false)
    {
        count++;
        counter.innerHTML=count;
        setTimeout("timerCycle()",1000);
    }
}