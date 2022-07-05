document.querySelector("#name").addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    let now = new Date();
    
    let hourOfDay = now.getHours();
    let partOfDay = "";

    if (hourOfDay < 12) {
      partOfDay = "morning";
    }else if (hourOfDay < 18) {
      partOfDay = "afternoon";
    }else {
      partOfDay= "evening";
    }

    let name = document.querySelector("#name-label");
    let nameValue = document.querySelector("#name").value;
  
    name.innerHTML = "Good " + partOfDay + "," + nameValue + ".";
    document.querySelector("#name").style.display = "none";
  }
});