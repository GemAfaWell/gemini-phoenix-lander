

//first function: creating the responsive navigation bar!

//define those variables
const evolutionav = document.getElementById("evolutionav");
const navinav = document.getElementById("section");

//write the function to make the nav bar
let issaNavBar = () => {
	//give a variable to the elements being plugged in
	let a = evolutionav;
	//if its class name is STRICTLY this particular const variable
	if (a.className === evolutionav) {
		//we'll make it responsive, so we can use it in the top navigation
		a.className += " responsive";
		//otherwise...
	} else {
		//it won't get added to the bunch
		a.className = evolutionav;
	}
};
//let's make the nav bar actually work!
let makeItWork = () => {
	//for loop time
	for (let i of navinav) {
		//define your variables, aka, what you're pulling for your function
		let list = document.createElement("li");
		let anchorElement = document.createElement("a");
		let liText = i.getAttribute(section);
		//connect elements to the page and vice versa
		anchorElement.innerHTML = liText;
		anchorElement.setAttribute("href", "#" + i.id);
		list.appendChild(anchorElement);
		//connect it to the nav bar
		evolutionav.appendChild(list);
		//event listener for smooth scrolling
		list.addEventListener ('click', function(e){
			e.preventDefault;
			i.scrollIntoView({
				behavior: "smooth"
			});
		});
	}
}

//activate each section
window.addEventListener("scroll",(e) => {
	//define your function variable to pull the sections
	let pieces = document.querySelectorAll("section");
	//iterate over the selection
	pieces.forEach (section => {
		//define the variable that pulls the page position from top of window
		let donde = section.getBoundingClientRect().top;
		//if it's within 150px of the top
		if (donde >= -50 && donde <= 250) {
			//make it active and do the pretty rainbow stuff to it
			section.classList.add("active");
			//otherwise...
		} else {
			//keep it as is
			section.classList.remove("active");
		}
	})
	setTimeout(1000);
})
