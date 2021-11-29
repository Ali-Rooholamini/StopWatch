"use strict";

let second = document.getElementById("second");
let minute = document.getElementById("minute");
let hour = document.getElementById("hour");
let play_stop_btn = document.querySelector("#btns button:nth-child(2)");
let play_stop_btn_icon = document.querySelector("#btns button:nth-child(2) span i");
let pauseButton = document.querySelector("#btns button:first-child");
let pauseButtonIcon = document.querySelector("#btns button:first-child span i");
let lapBtn = document.getElementById("lapbtn");
let sec = 0;
let min = 0;
let h = 0;
let CHECK_START = 0;
let resetFlag = false;
let pauseFlag = false;
let pauseClickControl = 0;

// reset Machine
function resetTimer(){
    resetFlag = true;
}

// play and pause Machine
function pauseControl(){
    if(CHECK_START == 1 && pauseClickControl == 0){
        pauseClickControl++;
        pauseFlag = true;
        pauseButton.style.backgroundColor = "#72768e";
        pauseButton.style.boxShadow = "inset 20px 20px 60px #616479,inset -20px -20px 60px #8388a3";
        pauseButtonIcon.classList.add("fa-play");
    }else{
        pauseClickControl = 0;
        pauseFlag = false;
        pauseButton.style.backgroundColor = "";
        pauseButton.style.boxShadow = "";
        pauseButtonIcon.classList.remove("fa-play");
    }
}

// addToTimer machine
function startCounting(){
    CHECK_START++;
    if(CHECK_START == 1){

        {
            play_stop_btn.style.backgroundColor = "red";
            play_stop_btn_icon.className = "fas fa-stop";
            play_stop_btn_icon.style.paddingLeft = "0px";
        }

        function Counting(){
            let timer = setTimeout(function(){
        
                function addToTimer(){
                    let timer2 = setTimeout(function(){
                        if(CHECK_START == 1 && resetFlag == false && pauseFlag == false){

                            sec++;
                            if(sec <= 9){
                                second.textContent = "0" + sec;
                            }else{
                                second.textContent = sec;
                            }

                            if(sec == 60){
                                min++;
                                sec = 0;
                                second.textContent = "0" + sec;

                                if(min <= 9){
                                    minute.textContent = "0" + min;
                                }else{
                                    minute.textContent = min;
                                }
                            }
                            
                            if(min == 60){
                                h++;
                                min = 0;
                                minute.textContent = "0" + min;

                                if(h <= 9){
                                    hour.textContent = "0" + h;
                                }else{
                                    hour.textContent = h;
                                }
                            }
                        }
                    },1);
                    
                    Counting();
                }

                if(resetFlag){
                    sec = 0;
                    min = 0; 
                    h = 0;
                    second.textContent = "00";
                    minute.textContent = "00";
                    hour.textContent = "00";
                    setTimeout(function(){
                        resetFlag = false;
                    },300);
                }

                if(CHECK_START == 1){
                    addToTimer();
                }

            },1000);
        }

        lapBtn.style.top = "0";
        lapBtn.style.opacity = "1";
        Counting();
    }else{
        CHECK_START = 0;
        sec = 0;
        min = 0;
        h = 0;
        pauseControl();
        play_stop_btn.style.backgroundColor = "";
        play_stop_btn_icon.className = "fas fa-play";
        play_stop_btn_icon.style.paddingLeft = "";
        lapBtn.style.top = "";
        lapBtn.style.opacity = "";
        second.textContent = "00";
        minute.textContent = "00";
        hour.textContent = "00";
    }
    
}