//Обработчик кнопка навигация

let open_nav = document.querySelector('.open_nav');
let nav_list = document.querySelector('.nav_list');

open_nav.addEventListener('click', function(){
	if (nav_list.className == 'nav_list') {
		nav_list.classList.add('nav_list_item_show')
	}
	else if (nav_list.className.includes('nav_list_item_show')) {
		nav_list.classList.remove('nav_list_item_show')
	}
})