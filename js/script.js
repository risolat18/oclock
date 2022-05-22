const hours = document.querySelector('.hours'),
    minutes = document.querySelector('.minutes'),
    seconds = document.querySelector('.seconds'),
    hour = document.querySelector('.number_1'),
    minut = document.querySelector('.number_2')
    
    function time() {
        let time = new Date
        h = time.getHours() * 30,
        m = time.getMinutes() * 6,
        s = time.getSeconds() * 6
        hours.style.transform = `rotate(${h}deg)`
        minutes.style.transform = `rotate(${m}deg)`
        seconds.style.transform = `rotate(${s}deg)`
        
        setTimeout(() => {
           watch() 
        }, 1000);
        
        hour.innerHTML = time.getHours()
        minut.innerHTML = time.getMinutes()
        
        time.getHours() < 10 ? hour.innerHTML = time.getHours() : hour.innerHTML = time.getHours()
        time.getMinutes() < 10 ? minut.innerHTML = time.getMinutes() : minut.innerHTML = time.getMinutes()
    }
    
    setInterval(() => {
        time()
    }, 1);