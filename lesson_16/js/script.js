
let documentActions = (e) => {
	const targetElement = e.target

	if (targetElement.closest('.icon-menu')) {
		document.documentElement.classList.toggle('open-menu')
	}
}

document.addEventListener('click', documentActions)

window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;
  const title = document.querySelector('.scroll__title');
  
  // Пропорциональное изменение размера шрифта и угла поворота
  const scale = 1 + scrollY / 500; // Увеличение масштаба при прокрутке
  const rotateX = Math.min(65, scrollY / 10); // Поворот от 0 до 65deg

  // Применяем трансформацию к заголовку
  title.style.transform = `scale(${scale}) rotateX(${rotateX}deg)`;
});