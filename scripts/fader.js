let opacity = 0;
let intervalID = 0;
const fadeOut = (elementID) => {
    intervalID=setInterval(hide,20);
}
const fadeIn = (elementID) => {
    intervalID=setInterval(show,20);
}
const show = (elementID) => {
    opacity = elementID.style.opacity;
    if(opacity <1 ) {
        opacity += 0.1;
        elementID.style.opacity = opacity;
        console.log(opacity);
    }
    else
        clearInterval(intervalID);

}
const hide = (elementID) => {
    opacity = window.getComputedStyle(elementID).opacity;
    if(opacity > 0) {
        opacity -= 0.1;
        elementID.style.opacity = opacity;
        console.log(opacity);
    }
    else
        clearInterval(intervalID);

}
