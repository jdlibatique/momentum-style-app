// import {setClock} from "./clock.js";

const localUserName = localStorage.getItem('username');
console.log(localUserName)

if (localUserName) {
  document.querySelector("#name").style.display = "none";

  let now = new Date();
    
  let hourOfDay = now.getHours();
  let partOfDay = "";

  let name = document.querySelector("#name-label");
  name.style.display = "block"
  fadeIn(name);
  console.log("test")
  name.innerHTML = "Good " + setClock() + ", " + localUserName + ".";
}

else {
  document.querySelector("#name").addEventListener("keyup", (event) => {
    console.log(event)
    if (event.key === "Enter") {
      let now = new Date();
      
      let hourOfDay = now.getHours();
      let partOfDay = "";
  
      let name = document.querySelector("#name-label");
      let nameValue = document.querySelector("#name").value;
  
      name.innerHTML = "Good " + setClock() + ", " + nameValue + ".";
      // document.querySelector("#name").style.display = "none";
      fadeOut(document.querySelector("#name"));
      localStorage.setItem('username', nameValue);
      fadeIn(name);
    }
  });
}

// const fadeIn = (element) => {
//   console.log(element);
//   let fadeTarget = element;
//   fadeTarget.style.display = "block";
//   let fadeEffect = setInterval(function () {
//     if (!fadeTarget.style.opacity) {
//       fadeTarget.style.opacity = 0;
//     }
//     if (fadeTarget.style.opacity < 1) {
//       fadeTarget.style.opacity = parseFloat(fadeTarget.style.opacity) + 0.1;
//       console.log(fadeTarget.style.opacity)
//     } else {
//       clearInterval(fadeEffect);
//     }
//   }, 50);
// }
//
// const fadeOut = (element) => {
//   console.log(element);
//   let fadeTarget = element;
//   let fadeEffect = setInterval(function () {
//     if (!fadeTarget.style.opacity) {
//       fadeTarget.style.opacity = 1;
//     }
//     if (fadeTarget.style.opacity > 0) {
//       fadeTarget.style.opacity = parseFloat(fadeTarget.style.opacity) - 0.1;
//     } else {
//
//       clearInterval(fadeEffect);
//       element.style.display = "none";
//     }
//   }, 50);
// }