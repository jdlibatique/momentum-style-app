const localFocus = localStorage.getItem('focus');

if (localFocus) {
  document.querySelector("#focus-txtbox").style.display = "none";
  document.querySelector("#focus-checkbox").style.display = "initial";

  let mainFocus = document.querySelector("#main-focus");
  mainFocus.innerHTML = "TODAY";

  let focusLabel = document.querySelector("#focus-label");
  focusLabel.innerHTML = localFocus;
}

else {
  document.querySelector("#focus-txtbox").addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      let focusValue = document.querySelector("#focus-txtbox").value;
      document.querySelector("#focus-txtbox").style.display = "none";
      document.querySelector("#focus-checkbox").style.display = "initial";
  
      let mainFocus = document.querySelector("#main-focus");
      mainFocus.innerHTML = "TODAY";
      
      let focusLabel = document.querySelector("#focus-label");
      focusLabel.innerHTML = focusValue;

      localStorage.setItem('focus', focusValue);
    }
  });
}

function focusCheckBoxValidate(){
  if (localFocus) {
    let focusCheckBox = document.querySelector("#focus-checkbox");
    let focusLabel = document.querySelector("#focus-label");

    if (focusCheckBox.checked == true) {
      focusLabel.innerHTML = "<del>" + localFocus + "</del>";
    }

    else {
      focusLabel.innerHTML = localFocus;
    }
  }

  else {
    let focusCheckBox = document.querySelector("#focus-checkbox");
    let focusLabel = document.querySelector("#focus-label");
    let focusValue = document.querySelector("#focus-txtbox").value;

    if (focusCheckBox.checked == true) {
      focusLabel.innerHTML = "<del>" + focusValue + "</del>";
    }
    else {
      focusLabel.innerHTML = focusValue;
    }
  }
}
