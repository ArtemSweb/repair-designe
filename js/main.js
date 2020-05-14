// document.addEventListener('DOMContentLoaded', function(event) {

// 	const modal = document.querySelector('.modal');
// 	const modalBtn = document.querySelectorAll('[data-toggle=modal]');
// 	const closeBtn = document.querySelector('.modal__close');
// //функции добавления и удаления класса модальному окну
// 	const addModal = () => { modal.classList.add('modal--visible'); }
// 	const removeModal = () => { modal.classList.remove('modal--visible'); }

// //Присваиваем всем найденным кнопкам функцию
// 	modalBtn.forEach((elem) => {
// 		elem.addEventListener('click', addModal);
// 	});

// 	closeBtn.addEventListener('click', removeModal);

// //закрытие по клавише esc
// 	document.addEventListener('keyup', (event) => {
// 		if (event.code == "Escape") removeModal();
// 	});
	
// //закрытие по клику не на модальном окне
//   document.addEventListener('click', (event) => {
//     if (event.target == modal) removeModal();
// 	});
	
// });

$(document).ready(function () {

	var modal = $('.modal'),
	modalBtn = $('[data-toggle=modal]'),
	closeBtn = $('.modal__close');

	modalBtn.on('click', function () {
		modal.toggleClass('modal--visible');
	});

	closeBtn.on('click', function () {
		modal.toggleClass('modal--visible');
	});
// закрытие модального окна нажатием на кнопку Esc
	$(document).keydown(function (e) {
		if (e.code == 'Escape') {
			modal.removeClass('modal--visible');
		};
	});
// закрытие модального окна при нажатие на любое место вне его
	$(document).on('click', function (e) {
		if (modal.is(e.target)) {
			modal.removeClass('modal--visible');
		};
	});

//Кнопка прокрутки вверх
	$(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });
// плавная прокрутка 
  $('.pageup').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, '300');
  });

});