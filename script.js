ampm = document.getElementById('ampm')
function displayTime(){
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = padZero(dateTime.getMinutes());
    let sec = padZero(dateTime.getSeconds()); 
    let date = dateTime.getDate();
    let month = padZero(dateTime.getMonth());
    let year = dateTime.getFullYear();
    if(hr>12){
        ampm.innerHTML = 'PM'
        hr = hr - 12
    }
    else{
        ampm.innerHTML = 'AM'
    }
    hr = padZero(hr);
    document.getElementById('hours').innerHTML = hr;
    document.getElementById('mins').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;    
    document.getElementById('date').innerHTML = date;
    document.getElementById('month').innerHTML = month;
    document.getElementById('day').innerHTML = year;
}

function padZero(num){
    return num<10?"0"+num:num
}


setInterval(displayTime, 100)