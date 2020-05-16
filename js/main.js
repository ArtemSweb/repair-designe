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
	
  // слайдер в секции Завершенные проекты
  var projectSwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    // effect: 'fade',
    // fadeEffect: {
    //   crossFade: true
    // },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
		},
		// Default parameters
		slidesPerView: 1,
		spaceBetween: 10,
		// Responsive breakpoints
		breakpoints: {
			640: {
				slidesPerView: 1,
				spaceBetween: 40
			}
		}
  });

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + bullets.width() + 40)
  bullets.css('left', prev.width() + 20)

});