import {setClock} from "./clock.js";
setClock();

const localUserName = localStorage.getItem('username');

if (localUserName) {
  document.querySelector("#name").style.display = "none";

  let now = new Date();
    
  let hourOfDay = now.getHours();
  let partOfDay = "";

  let name = document.querySelector("#name-label");

  name.innerHTML = "Good " + setClock() + ", " + localUserName + ".";
}

else {
  document.querySelector("#name").addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      let now = new Date();
      
      let hourOfDay = now.getHours();
      let partOfDay = "";
  
      let name = document.querySelector("#name-label");
      let nameValue = document.querySelector("#name").value;
  
      name.innerHTML = "Good " + setClock() + ", " + nameValue + ".";
      document.querySelector("#name").style.display = "none";
      localStorage.setItem('username', nameValue);
    }
  });
}

