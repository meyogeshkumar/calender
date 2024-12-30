const monthname=document.querySelector(".month-name");
const dayname=document.querySelector(".day-name");
const daynum=document.querySelector(".day");
const year=document.querySelector(".year");

const date=new Date();
console.log(date);

monthname.innerHTML= date.toLocaleString("en",{
    month : "long"
})

dayname.innerHTML = date.toLocaleDateString("en",{
    weekday:"long"
})

daynum.innerHTML = date.getDate();

year.innerHTML = date.getFullYear()