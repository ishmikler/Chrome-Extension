document.addEventListener('DOMContentLoaded', () => {
    const timerDisplay = document.getElementById('timerDisplay');
    const startButton = document.getElementById('startButton');
    const resetButton = document.getElementById('resetButton');
    const audio = new Audio('audio/Soft-alarm-tone.mp3')
    const body = document.querySelector('body');
    
    let timer;
    const time = 10; //Measured in seconds
    let timeleft = time

    function updateTimerDisplay() {
        const minutes = Math.floor(timeleft / 60);
        const seconds = timeleft % 60;
        timerDisplay.innerHTML = `${minutes}:${seconds.toString().padStart(2, '0')}`
    }

    function alarm(){
        audio.play();
        audio.volume = .5
    }

    function stopAlarm(){
        audio.pause();
    }

    startButton.addEventListener('click', function(){
        if(!timer){
            timer = setInterval(() => {
                if(timeleft > 0){
                    timeleft--
                    console.log(timeleft)
                    updateTimerDisplay();
                } else {
                    
                    clearInterval(timer)
                    alarm()
                    timer = null
                }   
            }, 1000)
        }
     
    })

    resetButton.addEventListener('click', function (){
        stopAlarm();
        clearInterval(timer)
        timeleft = time
        timer = null
        updateTimerDisplay();
    })

});