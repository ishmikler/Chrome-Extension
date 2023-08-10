document.addEventListener('DOMContentLoaded', () => {
    const timerDisplay = document.getElementById('timerDisplay');
    const breakMessage = document.getElementById('breakMessage')
    const startButton = document.getElementById('startButton');
    const resetButton = document.getElementById('resetButton');
    const setMinutes = document.getElementById('startMinutesButton')
    const audio = new Audio('audio/Soft-alarm-tone.mp3')
    const body = document.querySelector('body');
    
    let timer;
    let time = 1500; //Measured in seconds
    let timeleft = time

    function updateTimerDisplay() {
        const minutes = Math.floor(timeleft / 60);
        const seconds = timeleft % 60;
        timerDisplay.innerHTML = `${minutes}:${seconds.toString().padStart(2, '0')}`
    }

    function alarm(){
        audio.play();
        audio.volume = .1
    
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
                    breakMessage.style.display = 'block'
                }   
            }, 1000)
        }
     
    })

    resetButton.addEventListener('click', function (){
        stopAlarm();
        breakMessage.style.display = 'none';
        clearInterval(timer)
        timeleft = time
        timer = null
        updateTimerDisplay();
    })

    function parse(str){
        let timeInput
        let out
        if(str.includes(':')){
            timeInput = str.split(':')
            timeInput[0] = parseInt(timeInput[0])
            timeInput[1] = parseInt(timeInput[1])
            out = (timeInput[0] * 60) + timeInput[1]

        }else{
            out = parseInt(str) * 60

        }

        return out
    }

    setMinutes.addEventListener('click', function (){
        let input = document.getElementById('startMinutes').value
        stopAlarm();
        clearInterval(timer)
        time = parse(input)
        timeleft = time
        timer = null
        updateTimerDisplay()
    })

});