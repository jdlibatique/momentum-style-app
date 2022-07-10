// let opacity = 0;
// let intervalID = 0;
//
// const fadeOut = (elementID) => {
//     console.log(elementID);
//     intervalID=setInterval( () => hide(elementID),20);
// }
// const fadeIn = (elementID) => {
//     console.log(elementID);
//     intervalID = setInterval( () => show(elementID),20);
// }
// const show = (elementID) => {
//     opacity = elementID.style.opacity;
//     if(opacity < 1) {
//         opacity += 0.1;
//         elementID.style.opacity = opacity;
//         console.log(opacity);
//     }
//     else
//         clearInterval(intervalID);
//
// }
// const hide = (elementID) => {
//     opacity = window.getComputedStyle(elementID).opacity;
//     if(opacity > 0) {
//         opacity -= 0.1;
//         elementID.style.opacity = opacity;
//         console.log(opacity);
//     }
//     else
//         clearInterval(intervalID);
// }
//
// export {opacity, intervalID, fadeIn, fadeOut, show, hide};

const fadeIn = (element) => {
    console.log(element);
    let fadeTarget = element;
    fadeTarget.style.display = "block";
    let fadeEffect = setInterval( () => {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 0;
        }
        if (fadeTarget.style.opacity < 1) {
            fadeTarget.style.opacity = parseFloat(fadeTarget.style.opacity) + 0.1;
            console.log(fadeTarget.style.opacity)
        } else {
            clearInterval(fadeEffect);
        }
    }, 50);
}

const fadeOut = (element) => {
    console.log(element);
    let fadeTarget = element;
    let fadeEffect = setInterval( () => {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity = parseFloat(fadeTarget.style.opacity) - 0.1;
        } else {

            clearInterval(fadeEffect);
            element.style.display = "none";
        }
    }, 50);
}