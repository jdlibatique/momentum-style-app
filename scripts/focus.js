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
      // document.querySelector("#focus-txtbox").style.display = "none";
      fadeOut(document.querySelector("#focus-txtbox"));
      // document.querySelector("#focus-checkbox").style.display = "initial";
      fadeIn(document.querySelector("#focus-checkbox"));
  
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

document.querySelector("#main-focus-checkbox").addEventListener("mouseover", () => {
  document.querySelector("#focus-checkbox").style.opacity = "1";
  document.querySelector("#focus-delete-button").style.opacity = "1";
});

document.querySelector("#main-focus-checkbox").addEventListener("mouseleave", () => {
  document.querySelector("#focus-checkbox").style.opacity = "0";
  document.querySelector("#focus-delete-button").style.opacity = "0";
});

document.querySelector("#focus-delete-button").addEventListener("click", () => {
  localStorage.removeItem(localFocus);
})

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