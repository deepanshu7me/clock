const hour = document.getElementById("clock-hour");
const minutes = document.getElementById("clock-minutes");
const seconds = document.getElementById("clock-second");

const clock = () =>{
    let date = new Date();


    let hh = date.getHours() /12 * 360,
        mm = date.getMinutes() /60 * 360,
        ss = date.getSeconds()*6;


    hour.style.transform= `rotateZ(${hh + mm / 12}deg)`
    minutes.style.transform=`rotateZ(${mm}deg)`
    seconds.style.transform=`rotateZ(${ss}deg)`


}
setInterval(clock,1000)

const dateDayWeek = document.getElementById("date-day-week");
const dateMonth = document.getElementById("date-month");
const dateDay = document.getElementById("date-day");
const dateYear = document.getElementById("date-year");
const textHour = document.getElementById("text-hour");
const textMinutes = document.getElementById("text-minutes");
const textAmPm = document.getElementById("text-hour-ampm");




const clockText =()=>{

    let date = new Date();

    let dayWeek = date.getDay(),
        month = date.getMonth(),
        day = date.getDate(),
        year = date.getFullYear()
        hh = date.getHours(),
        mm = date.getMinutes();
        // ampm

    let daysWeek =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    dateDayWeek.innerHTML=`${daysWeek[dayWeek]}`;
    dateMonth.innerHTML=`${months[month]}`;
    dateDay.innerHTML=`${day}, `;
    dateYear.innerHTML=`${year}`;
    

    if (hh>=12) {
        hh = hh -12
        ampm ='PM'
        
    }
    else{
        ampm ='AM'
    }

    textAmPm.innerHTML=`${ampm}`

    if (hh==0) {
        hh=12
        
    }

    if (hh<10) {
        hh=`0${hh}`
        
    }

    textHour.innerHTML=`${hh} : `;

    if(mm<10){
        mm=`0${mm}`
    }

    textMinutes.innerHTML = `${mm}`








}
setInterval(clockText,1000)




let date = new Date();

console.log(date.getSeconds());
