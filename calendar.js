// const date = new Date();

// const monthDays()=document.querySelector('.days');

// const months=[
// 	"Janauary",
// 	"February",
// 	"March",
// 	"April",
// 	"May",
// 	"June",
// 	"July",
// 	"August",
// 	"September",
// 	"October",
// 	"November",
// 	"December",
// ];

// document.querySelector('.date h1').innerHTML=months[date.getMonth()];

// document.querySelector('.date p').innerHTML=date.toDateString();

// let days="";
// for (let i=1; i<=31 ; i++) {
// 	days+=`<div>${i}</div>`;
// monthDays.innerHTML=days;
// }


function today(){
      var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]; 
      var dt=new Date();
      // console.log(dt); 

      document.getElementById("date").innerHTML=dt.toDateString();

      var month=dt.getMonth();
      var year=dt.getFullYear();
      dt=new Date(year,month,01); 
      var firstday=dt.getDay();
      var today=dt.getDay();
      dt.setMonth(month+1,0); 
       var  lastday=dt.getDate(); 
      dt.getMonth(month-1,0);
      var prevdate=dt.getDate();
      document.getElementById("month").innerHTML=months[month];

      var cells = "";


      for(let f=firstday;f>0;f--){
        cells+="<div>"+(prevdate-f) +"</div>";
      }
      for(let t=1;t<= lastday;t++){
        if(t==today){
          cells+= "<div class='today'>" + t + "</div>";
        }else
        {cells += "<div>" + t + "</div>";}
      }
      document.getElementsByClassName("days")[0].innerHTML = cells;
    }