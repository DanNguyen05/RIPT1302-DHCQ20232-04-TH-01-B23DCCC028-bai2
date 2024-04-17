let timer;
let minutes;
let seconds;
let alarmSound = document.getElementById('alarmSound');

document.getElementById('startBtn').addEventListener('click', function() {
    minutes = parseInt(document.getElementById('minutes').value);
    seconds = parseInt(document.getElementById('seconds').value);

    if (isNaN(minutes) || isNaN(seconds)) {
        alert('Vui lòng nhập số phút và giây.');
        return;
    }

    if (minutes < 0 || seconds < 0) {
        alert('Vui lòng nhập số dương.');
        return;
    }

    startTimer();
});

document.getElementById('resetBtn').addEventListener('click', function() {
    clearInterval(timer);
    document.getElementById('timer').innerText = '00:00';
    document.getElementById('timer').classList.remove('finished');
    document.getElementById('alert').style.display = 'none';
    alarmSound.pause();
    alarmSound.currentTime = 0;
});

function startTimer() {
    let totalTime = minutes * 60 + seconds;
    timer = setInterval(function() {
        minutes = Math.floor(totalTime / 60);
        seconds = totalTime % 60;

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        document.getElementById('timer').innerText = `${minutes}:${seconds}`;

        if (totalTime <= 0) {
            clearInterval(timer);
            document.getElementById('timer').innerText = '00:00';
            document.getElementById('timer').classList.add('finished');
            alarmSound.play();
            document.getElementById('alert').innerText = 'Hết giờ!';
            document.getElementById('alert').style.display = 'block';
        }

        totalTime--;
    }, 1000);
}
