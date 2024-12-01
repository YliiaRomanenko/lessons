console.log("Script loaded");


let documentActions = (e) => {
	const targetElement = e.target

	if (targetElement.closest('.icon-menu')) {
		document.documentElement.classList.toggle('open-menu')
	}
}

document.addEventListener('click', documentActions)


// движ на кнопке за курсором
const buttons = document.querySelectorAll('.img-box__btn-card');
buttons.forEach((btn) => {
	btn.addEventListener('mousemove', (e) => {

		let x = e.pageX - btn.offsetLeft;
		let y = e.pageY - btn.offsetTop;

		btn.style.setProperty('--x', x + 'px');
		btn.style.setProperty('--y', y + 'px');
	} )
});

//burger
// burger-menu
document.addEventListener("click", function (e) {
  const targetElement = e.target;
  // .icon-menu це клас кнопки при кліку на яку буде спрацьовувати код додаватись до тегу html клас menu-open 
  if (targetElement.closest('.header__burger-menu')) {
    document.documentElement.classList.toggle('open-menu');
    e.preventDefault();
  }
})
