let date = new Date();

let hrs = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

function updateTime()
{
    let date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    $("#timetext").text(hrs + " : " + min + " : " + sec);
}

function today()
{
    let date = new Date();

    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();

    $("#datetext").text((day+6) + " / " + (month+1) + " / " + year);
} 

// Call updateTime every second
setInterval(updateTime, 1000);

// Optional: update immediately on load
updateTime();
today();