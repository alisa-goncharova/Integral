let body = document.querySelector('body');
// Нажатие на кнопку "заказать"
let order = document.querySelector('.auth__order-btn');

order.onclick = function(){
    order.classList.toggle('disabled');
}
//нажатие на пункт списка
let navBar = document.querySelector('.header__navs');
let navLinks = document.querySelectorAll('.header__navs a');
navBar.addEventListener('click', function(event) {
    event.preventDefault(); // остановим работу ссылки, нам же надо поменять класс а не уйти со страницы
    // Пробежимся по ссылкам и удалим active класс, если вдруг он где-то есть
    navLinks.forEach(function(element, index) {
        element.classList.remove('header__nav-item--active');
    });
    // Переключим для элемента на который кликнули класс
    event.target.classList.add('header__nav-item--active');

    // if(document.querySelector('.header__nav-item.header__nav-all').classList.contains('header__nav-item--active')){
    //     document.querySelector('.svg__default').classList.add('none');
    //     console.log('есть класс')
    // }
    // if(document.querySelector('.header__nav-item.header__nav-all').classList.contains('header__nav-item--active') === false){
    //     document.querySelector('.svg__default').classList.remove('none');
    //     console.log('нет класса')
    // }

});
// конец

//нажатие на иконку аккаунта
let signBtn = document.querySelector('.auth__sign-btn');
let modalAuth = document.querySelector('.auth__modal');
signBtn.onclick = function(){
    signBtn.classList.toggle('auth__order-btn--active');
    modalAuth.classList.toggle('auth__modal--show');
    let width = screen.width;
    if(width <= 500){
        document.querySelector('.header__logo').classList.toggle('none');
        document.querySelector('.auth__order-btn').classList.toggle('none');
        document.querySelector('.header__mobile-burger').classList.toggle('mobile-burger--active');
        document.querySelector('.header').classList.toggle('header__sign--show');
        // body.classList.toggle('hidden');
        if(document.querySelector('.auth__modal').classList.contains('auth__modal--show')){
            body.classList.add('hidden');
        } else{
            body.classList.remove('hidden');
        }
    }
}
// // Поиск
let input = document.querySelector('.dictionary__search input');
// // Реакция на введение символов

//Реакция на нажатие input
input.onfocus = function (){
    input.classList.add('dictionary__search--active');
    input.setAttribute('placeholder', '');
}
//Реакция после нажатия на input
input.onblur = function (){
    input.classList.remove('dictionary__search--active');
    input.setAttribute('placeholder', 'Начните писать...');
}
//коллекция кнопок dictionary__list-item
let liList = document.querySelector('.dictionary__content');
let liItems = document.querySelectorAll('.dictionary__content li');
liList.addEventListener('click', function(event) {
    event.preventDefault(); // остановим работу ссылки, нам же надо поменять класс а не уйти со страницы
    // Пробежимся по плиткам и удалим active класс, если вдруг он где-то есть
    liItems.forEach(function(element, index) {
        element.classList.remove('active');
    });
    // Переключим для элемента на который кликнули класс
    event.target.classList.add('active');
});

//адаптивное меню
let burger = document.querySelector('.header__mobile-burger');

burger.onclick = function(){
    burger.classList.toggle('mobile-burger--active');
    // проверка на наличие открытого модального окна
    if(document.querySelector('.header__mobile-modal').classList.contains('header__mobile-modal--show')){
        body.classList.remove('hidden');
    } else{
        body.classList.add('hidden');
    }
    if(document.querySelector('.auth__modal').classList.contains('auth__modal--show')){
        burger.classList.toggle('mobile-burger--active');
        signBtn.onclick();
    } else{
    document.querySelector('.header__mobile-modal').classList.toggle('header__mobile-modal--show');
        let width = screen.width;
        if(width <= 500){
            document.querySelector('.auth__order-btn').classList.toggle('none');
            document.querySelector('.auth__sign-btn').classList.toggle('none');
        }
    }
}

// темная  тема
let inputTheme = document.querySelector('.modal__switch input');

inputTheme.onclick = function (){
    if(inputTheme.checked){
        console.log('light');
        document.querySelector('.modal__dark').classList.remove('modal__dark--active');
        document.querySelector('.modal__light').classList.add('modal__light--active');
    } else{
        console.log('dark');
        document.querySelector('.modal__dark').classList.add('modal__dark--active');
        document.querySelector('.modal__light').classList.remove('modal__light--active');
    }
}

// нажатие на пункты модального меню при клике на акк
let modalList = document.querySelector('.auth__modal-list');
let modalListItem = document.querySelectorAll('.auth__modal-list a');
modalList.addEventListener('click', function(event) {
    event.preventDefault(); // остановим работу ссылки, нам же надо поменять класс а не уйти со страницы
    // Пробежимся по ссылкам и удалим active класс, если вдруг он где-то есть
    modalListItem.forEach(function(element, index) {
        element.classList.remove('auth__modal-item--active');
    });
    // Переключим для элемента на который кликнули класс
    event.target.classList.add('auth__modal-item--active');
});

//нажатие на мобильное меню
let mobileNavs = document.querySelector('.header__mobile-navs');
let mobileNavsItem = document.querySelectorAll('.header__mobile-navs a');
mobileNavs.addEventListener('click', function(event) {
    event.preventDefault(); // остановим работу ссылки, нам же надо поменять класс а не уйти со страницы
    // Пробежимся по ссылкам и удалим active класс, если вдруг он где-то есть
    mobileNavsItem.forEach(function(element, index) {
        element.classList.remove('header__nav-item--active');
    });
    // Переключим для элемента на который кликнули класс
    event.target.classList.add('header__nav-item--active');
});

document.addEventListener("DOMContentLoaded", ready);
function ready(){
    let colletion = document.querySelector('.header__nav-item');
    for(let i = 0; i < colletion.length; i++){
        if(i > 7 && colletion[i].classList.contains('header__nav-all') === false){
            colletion[i].classList.add('none');
        }
    }
    console.log('загрузка страницы');
}