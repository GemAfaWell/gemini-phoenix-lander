//first function: creating the responsive navigation bar!

//define those variables
const evolutionav = document.getElementById("evolutionav");
const navinav = document.getElementsByTagName("section");
const part = document.querySelector("section");
const pieces = document.querySelectorAll("section");

//write the function to make the nav bar
let issaNavBar = () => {
  //define the variable
  let n = evolutionav;
  //if its class name is STRICTLY one of the particular classes that can be grouped
  if (n.className === "evolutionav") {
    //we'll make it responsive, so we can use it in the top navigation
    n.className += " responsive";
    //otherwise...
  } else {
    //it won't get added to the bunch
    n.className = "evolutionav";
  }
};

//let's make the nav bar actually work!
//for loop time
for (let i of navinav) {
  //define your variables, aka, what you're pulling for your function
  let list = document.createElement("li");
  let anchorElement = document.createElement("a");
  let liText = i.id;
  const section = document.getElementById(i.id);
  //connect elements to the page and vice versa
  anchorElement.innerHTML = liText;
  anchorElement.setAttribute("href", "#" + i.id);
  list.appendChild(anchorElement);
  //connect it to the nav bar
  evolutionav.appendChild(list);
  anchorElement.addEventListener("click", (e) => {
    e.preventDefault();
    section.scrollIntoView({
      behavior: "smooth"
    });
  });
};

//activate each section
window.addEventListener("scroll", (e) => {
  //prevent the default event
  e.preventDefault();
  //iterate over the sections
  pieces.forEach(part => {
    //define the variable that pulls the page position from top of window
    let donde = part.getBoundingClientRect().top;
    //if it's within 150px of the top
    if (donde >= -50 && donde <= 250) {
      //make it active and do the pretty rainbow stuff to it
      part.classList.add("active");
      //otherwise...
    } else {
      //keep it as is
      part.classList.remove("active");
    }
  });
  setTimeout(1000);
});

//mobile nav bar operability/onclick
let navi = () => {
  if (evolutionav.className === "evolutionav") {
    evolutionav.className += " responsive";
  } else {
    evolutionav.className = "evolutionav";
  }
}