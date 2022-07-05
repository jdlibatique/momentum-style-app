document.querySelector("#focus-txtbox").addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    let focusValue = document.querySelector("#focus-txtbox").value;
    document.querySelector("#focus-txtbox").style.display = "none";

    let mainFocus = document.querySelector("#main-focus");
    mainFocus.innerHTML = "TODAY";
    let focusLabel = document.querySelector("#focus-label");
    focusLabel.innerHTML = focusValue;
  }
});

function focusCheckBoxValidate(){
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
