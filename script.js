const cur_time=document.querySelector('h1');
const selectMenu = document.querySelectorAll("select");

for (let i = 12; i >0; i--) {
    i = i < 10 ? "0" + i : i; 
    let option= `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend",option);
}

for (let i = 59; i >= 0; i--){
 i= i<10 ? "0"+ i : i;
let option= `<option value="${i}">${i}</option>`;
selectMenu[1].firstElementChild.insertAdjacentHTML("afterend",option);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option= `<option value= ${ampm}> ${ampm} </option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend",option);
    
}

setInterval(()=>{
    let date=new Date(),
    hours=date.getHours(),
    minutes=date.getMinutes(),
    seconds=date.getSeconds(),
    ampm="AM";

    if(hours>=12){
        h=h-12;
        ampm="PM";
    }
    hours= hours==0 ? hours=12 :hours;

    hours= hours<10 ? "0" +hours : hours;
    minutes=minutes<10 ? "0" + minutes :minutes;
    seconds =seconds<10 ? "0" + seconds : seconds;
    cur_time.innerText=`${hours}:${minutes}:${seconds} ${ampm}`;
  
},1000
    );

    // let counter = 0;
    // setInterval(() => {
    //   document.querySelector("h1").innerText = counter;
    //   counter++;
    // }, 1000);