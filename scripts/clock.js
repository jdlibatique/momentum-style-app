const setClock = () => {
    // let today= new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    let today = new Date();

    let hour = today.getHours();
    let minute = today.getMinutes();
    let timeOfDay = ""

    if (hour >= 5 && hour < 12) {
        timeOfDay = "morning";
        console.log(timeOfDay);
    }else if (hour >= 12 && hour < 18) {
        if (hour >= 13) hour -= 12;
        timeOfDay = "afternoon";
        console.log(timeOfDay);
    }else if (hour >= 18 && hour < 5){
        if (hour >= 18) hour -= 12;
        timeOfDay = "evening";
        console.log(timeOfDay);
    }

    let time = hour + ":" + minute;

    console.log(today);
    document.querySelector("#clockHeader").innerText = time;
    // let timeout = setTimeout(setClock =>  1000);
    let t = setTimeout(() => setClock(), 1000);
}