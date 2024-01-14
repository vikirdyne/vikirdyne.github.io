let myHeading = document.querySelector("h1");
myHeading.onclick = () => alert("Narayan! Narayan!");

const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/vishnu-ram-krishna.jpg") {
    myImage.setAttribute("src", "images/shankar.jpg");
  } else {
    myImage.setAttribute("src", "images/vishnu-ram-krishna.jpg");
  }
};

function setUserName() {
  const myName = prompt("Please enter your name: ");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Welcome ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome ${storedName}`;
}

let myButton = document.querySelector("button");
myButton.onclick = () => setUserName();
