"use strict";

window.addEventListener('DOMContentLoaded', () => {

	const langTab = document.querySelectorAll('.lang_tab'),
			langList = document.querySelectorAll('.lang_list'),
			menuTab = document.querySelector('.pod_menu'),
			menuOpen = document.querySelector('#menu__tablink'),
			menuClose = document.querySelector('#close_menu'),
			phoneMenu = document.querySelector('.menu__icon-menu'),
			phoneMenuOpen = document.querySelector('.menu__icon'),
			phoneMenuClose = document.querySelector('#menu__icon-menu_close'),
			body = document.querySelector('body');

	langTab.forEach(item => {
		item.addEventListener('click', () => {
			langList.forEach(i => {
				i.classList.toggle('toggle');
			});
			
		});
	});
	

	menuOpen.addEventListener('click', () => {
		menuTab.classList.add('open__menu');
		menuTab.classList.remove('close__menu');
	});

	menuClose.addEventListener('click', () => {
		menuTab.classList.add('close__menu');
		menuTab.classList.remove('open__menu');
	});

	phoneMenuOpen.addEventListener('click', () => {
		phoneMenu.style.left = '0';
		phoneMenu.style.transition = 'all .3s ease 0s';
	});

	phoneMenuClose.addEventListener('click', () => {
		phoneMenu.style.left = '-100%';
		phoneMenu.style.transition = 'all .3s ease 0s';
	});

	//Slider

	new Swiper('.swiper-container', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		slidesPerView: 4,

		keyboard: {
			enabled: true,
			onlyInViewport: true,
			pageUpDown: true,
		},

		loop: true,

		breakpoints: {
			300: {
				slidesPerView: 1,
			},
			689: {
				slidesPerView: 2,
			},
			1020: {
				slidesPerView: 3,
			},
			1342: {
				slidesPerView: 4,
			},
		},
	});
});