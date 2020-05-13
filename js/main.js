document.addEventListener('DOMContentLoaded', function(event) {

	const modal = document.querySelector('.modal');
	const modalBtn = document.querySelectorAll('[data-toggle=modal]');
	const closeBtn = document.querySelector('.modal__close');
//функции добавления и удаления класса модальному окну
	const addModal = () => { modal.classList.add('modal--visible'); }
	const removeModal = () => { modal.classList.remove('modal--visible'); }

//Присваиваем всем найденным кнопкам функцию
	modalBtn.forEach((elem) => {
		elem.addEventListener('click', addModal);
	});

	closeBtn.addEventListener('click', removeModal);

//закрытие по клавише esc
	document.addEventListener('keyup', (event) => {
		if (event.code == "Escape") removeModal();
	});
	
//закрытие по клику не на модальном окне
  document.addEventListener('click', (event) => {
    if (event.target == modal) removeModal();
	});
	
});
