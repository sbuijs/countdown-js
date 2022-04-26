'use strict';
console.log(`The JS works!`);

const daySelector = document.getElementById("days");
const hourSelector = document.getElementById("hours");
const minuteSelector = document.getElementById("minutes");
const secondSelector = document.getElementById("seconds");
const countdownFinishedSelector = document.getElementById("countdown-finished");
const countdownSelector = document.querySelector(".countdown");

const countDown = () => {
    const countDate = new Date("2022-08-17 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    //time logic
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //calculate the amount of days, hours, minutes and seconds that are in the gap
    const textDay = Math.floor(gap / day);
    daySelector.innerHTML = textDay;

    const textHour = Math.floor((gap % day) / hour);
    hourSelector.innerHTML = textHour;

    const textMinute = Math.floor((gap % hour) / minute);
    minuteSelector.innerHTML = textMinute;

    const textSecond = Math.floor((gap % minute) / second);
    secondSelector.innerHTML = textSecond;

    if (gap <= 0) {
        countdownFinishedSelector.classList.remove("hidden");
        countdownSelector.classList.add("hidden");
    }
};

const interval = setInterval(function () {
    countDown();
}, 1000);
