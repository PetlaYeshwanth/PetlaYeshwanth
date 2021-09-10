/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 











/**/
// List of sentences
var _CONTENT = [ "Student","Developer","Coder" ];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Implements typing effect
function Type() { 
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If last sentence then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100)
/**/



//vanilla  tilt .js
VanillaTilt.init(document.querySelectorAll(".about__img"), {
	max: 25,
	speed: 400,
	glare: true,
	"max-glare": 1
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".about__img"));


//vanilla  tilt .js
VanillaTilt.init(document.querySelectorAll(".contact-container"), {
	max: 25,
	speed: 400,
	glare: true,
	"max-glare": 1
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".contact-container"));


//vanilla  tilt .js
VanillaTilt.init(document.querySelectorAll(".card"), {
	max: 25,
	speed: 400,
	glare: true,
	"max-glare": 1
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".card"));


















document.addEventListener("DOMContentLoaded", function (event) {
	//Event listener for clicking on hamburger menu
	document.getElementById('burger').addEventListener('click', function () {
		//Swap visible / hidden styles
		document.getElementById('nav').className = document.getElementById('nav').className ===
			'hidden' ? 'visible' : 'hidden';
	})

	//Event listener for clicking anywhere on nav to slide it out
	//of view after used mames a selection.
	document.getElementById('nav').addEventListener('click', function () {
		document.getElementById('nav').className = 'hidden';
	})
})