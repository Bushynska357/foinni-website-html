const navSlide = () =>{
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.menu__media');

	burger.addEventListener('click',()=>{
		nav.classList.toggle('menu--active');
	})
	
}

function myFunction(x) {
  x.classList.toggle("change");
}
navSlide();

