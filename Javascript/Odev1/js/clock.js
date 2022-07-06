function showTime() {
    const time = document.getElementById("myClock");

    let day = new Date().getDay()
    switch (day) {
        case 1:
            day = 'Pazartesi'
            break;
        case 2:
            day = 'Salı'
            break;
        case 3:
            day = 'Çarşamba'
            break;
        case 4:
            day = 'Perşembe'
            break;
        case 5:
            day = 'Cuma'
            break;
        case 6:
            day = 'Cumartesi'
            break;
        default:
            day = 'Pazar'
            break;
    }


    time.innerHTML = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }) + " " + day;
}