days = document.getElementById("days");
hours = document.getElementById("hours");
minutes = document.getElementById("minutes");
seconds = document.getElementById("seconds");
thisYear = document.getElementById("thisYear");


function coundTimeDiff() {
    const date1 = new Date();
    const nextYear = date1.getFullYear() + 1;
    const date2 = new Date(`1/1/${nextYear} 0:0:0`);

    const daysDiff = (Math.floor((date2-date1)/(1000*60*60*24)));
    const hoursDiff = (Math.floor((date2-date1)/(1000*60*60)))-daysDiff*24;
    const minutesDiff = (Math.floor((date2-date1)/(1000*60))) - (daysDiff*24*60 + hoursDiff*60);
    const secondsDiff = (Math.floor((date2-date1)/(1000))) - (daysDiff*24*60*60 + hoursDiff*60*60 + minutesDiff*60);


    days.innerText = daysDiff<10 ? "0" + daysDiff : daysDiff;
    hours.innerText = hoursDiff<10 ? "0" + hoursDiff : hoursDiff;
    minutes.innerText = minutesDiff<10 ? "0" + minutesDiff : minutesDiff;
    seconds.innerText = secondsDiff<10 ? "0" + secondsDiff : secondsDiff;
    thisYear.innerText = date1.getFullYear();

}

setInterval(coundTimeDiff,1000);
