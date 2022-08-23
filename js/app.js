

//first function: creating the responsive navigation bar!

//define those variables
const evolutionav = document.getElementById("evolutionav");
const navinav = document.getElementsByTagName("section");

//write the function to make the nav bar
function issaNavBar () {
	let a = evolutionav;
	if (a.className === evolutionav) {
		a.className += " responsive";
	} else {
		a.className = evolutionav;
	}
}
//let's make the nav bar actually work!
function makeItWork () {
	for (let i of navinav) {
		let list = document.createElement("li");
		let anchorElement = document.createElement("a");
		let liText = i.getAttribute(section);
		anchorElement.innerHTML = liText;
		anchorElement.setAttribute("href", "#" + i.id);
		list.appendChild(anchorElement);
		evolutionav.appendChild(list);
		list.addEventListener ('click', function(e){
			e.preventDefault;
			i.scrollIntoView({
				behavior: "smooth"
			});
		});
	}
}

//activate each section
function activeSections () {
	for (let i of navinav)
		list.classList.remove("active");
		list.classlist.add("active");
}