const localFocus = localStorage.getItem('focus');
const localCheckBoxStatus = localStorage.getItem('checkbox');

if (localFocus) {
  let focusCheckBox = document.querySelector("#focus-checkbox");

  document.querySelector("#focus-txtbox").style.display = "none";
  focusCheckBox.style.display = "initial";

  let mainFocus = document.querySelector("#main-focus");
  mainFocus.innerHTML = "TODAY";

  let focusLabel = document.querySelector("#focus-label");
  focusLabel.innerHTML = localFocus;

  if (localCheckBoxStatus == 'true') {
    focusCheckBox.checked = true;
    focusLabel.innerHTML = "<del>" + localFocus + "</del>";
    localStorage.setItem('checkbox', focusCheckBox.checked);
  }
  else if (localCheckBoxStatus == 'false') {
    focusLabel.innerHTML = localFocus;
    localStorage.setItem('checkbox', focusCheckBox.checked);
  }
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
      focusCheckBoxValidate();
    }
  });
}

function focusCheckBoxValidate(){
  if (localFocus) {
    let focusCheckBox = document.querySelector("#focus-checkbox");
    let focusLabel = document.querySelector("#focus-label");

    if (focusCheckBox.checked == true) {
      focusLabel.innerHTML = "<del>" + localFocus + "</del>";
      localStorage.setItem('checkbox', focusCheckBox.checked);
    }

    else {
      focusLabel.innerHTML = localFocus;
      localStorage.setItem('checkbox', focusCheckBox.checked);
    }
  }

  else {
    let focusCheckBox = document.querySelector("#focus-checkbox");
    let focusLabel = document.querySelector("#focus-label");
    let focusValue = document.querySelector("#focus-txtbox").value;

    if (focusCheckBox.checked == true) {
      focusLabel.innerHTML = "<del>" + focusValue + "</del>";
      localStorage.setItem('checkbox', focusCheckBox.checked);
    }
    else {
      focusLabel.innerHTML = focusValue;
      localStorage.setItem('checkbox', focusCheckBox.checked);
    }
  }

  
}
