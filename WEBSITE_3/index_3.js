let date = new Date();
//let year = date.getFullYear()
//let dayOfMonth = date.getDate();
//let dayOfWeek = date.getDay();
//let hour = date.getHours();
//date = date.toLocaleString();

//console.log(date);
//document.getElementById("myLabel").innerHTML = hour;



document.getElementById("myLabel").innerHTML = formatTime(date);


function formatDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    return `${day}/${month}/${year}`;
}

function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hours >= 12 ? "PM" : "AM";
    hours = (hours % 12) || 12;
    return `${hours}: ${minutes}: ${seconds}${amOrPm}`
}
