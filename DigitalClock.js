const hour=document.getElementById("hour");
const minute=document.getElementById("min");
const seconds=document.getElementById("sec");
const ampm=document.getElementById("ampm");

function upadteclock(){
    let h =new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let am="AM";

    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;
    if(h>12){
        h=h-12;
        am="PM"
    }
    hour.innerText=h;
    minute.innerText=m;
    seconds.innerText=s;
    ampm.innerText=am;
   setTimeout(()=>{
    upadteclock()
   },1000)
}
upadteclock();