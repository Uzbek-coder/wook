"use strict";

window.addEventListener('DOMContentLoaded', () => {

	const langTab = document.querySelector('.lang_tab'),
			langList = document.querySelector('.lang_list'),
			menuTab = document.querySelector('.pod_menu'),
			menuOpen = document.querySelector('#menu__tablink'),
			menuClose = document.querySelector('#close_menu'),
			phoneMenu = document.querySelector('.menu__icon-menu'),
			phoneMenuOpen = document.querySelector('.menu__icon'),
			phoneMenuClose = document.querySelector('#menu__icon-menu_close');

	langTab.addEventListener('click', () => {
		langList.classList.toggle('toggle');
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
	})
});