// our skills grow section bar 
let section = document.querySelector('.our-skills');
let bars = document.querySelectorAll('.the-progress span');

let section_stats = document.querySelector('.stats');
let numbers = document.querySelectorAll('.box .number');

let nums = document.querySelectorAll('.number');

let started = false;


window.onscroll =()=>{
    if (window.scrollY >= section.offsetTop) {
       bars.forEach((bar)=>{
           bar.style.width = bar.dataset.width;
       })
    }

    if (window.scrollY >= section_stats.offsetTop - 200) {
        if (!started) {
            nums.forEach((num)=> startCount(num));
        }
        started =true;
     }
}


let countDownDate = new Date('Dec 31, 2021 23:59:59').getTime();

let count = setInterval(()=>{

    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;


    let days = Math.floor(dateDiff / (1000*60*60*24));
    let hours = Math.floor(dateDiff % (1000*60*60*24) / (1000*60*60));
    let minutes = Math.floor(dateDiff % (1000*60*60) / (1000*60));
    let seconds = Math.floor(dateDiff % (1000* 60) / 1000);;

    document.querySelector('.days').innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector('.hours').innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector('.minutes').innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector('.seconds').innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dateDiff <= 0) {
        clearInterval(count);
    }
},1000);





function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(() =>{
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    },3000 / goal);
}