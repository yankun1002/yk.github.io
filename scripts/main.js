// let myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
//   }

// //   document.querySelector("html").addEventListener("click", function () {
// //     alert("别戳我，我怕疼！");
// //   });

// document.querySelector("html").addEventListener("click", () => {
//     alert("别戳我，我怕疼！");
//   });


const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/yk1.png") {
    myImage.setAttribute("src", "images/yk2.png");
  } else {
    myImage.setAttribute("src", "images/yk1.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
      } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
      }
  }

  const storedName = localStorage.getItem("name");
  if (!storedName) {
    setUserName();
  } else {
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }

  myButton.onclick = function () {
    setUserName();
  };