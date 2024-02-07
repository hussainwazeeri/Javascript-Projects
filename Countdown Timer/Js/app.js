const endDate= "01 January 2025 01:00 AM"
const title= document.getElementById("title");
var date= document.getElementById("end-date");
document.getElementById("end-date").innerText= endDate;
const inputs= document.querySelectorAll("input");
// const time= document.getElementsByClassName("timeNow");

// const clock= ()=>{

// }
function clock(){
    const end= new Date(endDate);
    const now= new Date();
    const diff= (end- now)/1000;
    console.log(diff);
    // console.log(end);
    // console.log(now);

    // console.log(Math.floor(diff/3600/24))
    if(diff >=0){
    //Convert seconds into Days
    inputs[0].value= Math.floor(diff/ 3600/24);
    //Convert seconds into Hours
    inputs[1].value= Math.floor(diff/ 3600) %24;
    //Convert seconds into Minutes
    inputs[2].value= Math.floor(diff/60) %60;
    //Convert seconds into Seconds
    inputs[3].value= Math.floor(diff) %60;
    }
    else{
        title.innerHTML= "HAPPY NEW YEAR"
        title.style.fontSize= "5rem";
        title.style.color= "yellow";
        date.style.display= "none";
    }
}
// Initial call
clock();
/*
    1 day= 24 hours
    1 hour= 60 minutes
    60 minute= 3600 seconds
*/ 
setInterval( ()=>{
        clock()
    },
    1000
)

function getCurrentTime(){
    const time_now= new Date;
    const hours= time_now.getHours().toString().padStart(2, '0');
    const minutes= time_now.getMinutes().toString().padStart(2, '0');
    const seconds= time_now.getSeconds().toString().padStart(2, '0');
    inputs[4].value= hours;
    inputs[5].value= minutes;
    inputs[6].value= seconds;
    // time[0].value= hours;
    // time[1].value= minutes;
    // time[2].value= seconds;
}
getCurrentTime();

setInterval (() =>{
        getCurrentTime()
    },
    1000
)