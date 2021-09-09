
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
});
// конец
//нажатие на иконку аккаунта
let signBtn = document.querySelector('.auth__sign-btn');

signBtn.onclick = function(){
    signBtn.classList.toggle('auth__order-btn--active');
}

// Поиск
let input = document.querySelector('.dictionary__search input');
// Реакция на введение символов
input.oninput = function (){
    if(input.value.length > 0){
        input.classList.add('dictionary__search--active');
        input.setAttribute('placeholder', '');
    } else {
        input.classList.remove('dictionary__search--active');
        input.setAttribute('placeholder', 'Начните писать...');
        //удаление активной плитки
        liTmp.classList.remove('active');
    }
}

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
let liItems = document.querySelectorAll('.dictionary__list-item');
let liTmp = liItems[0];
// активное сосотояние у плит и возврат значения в input
for(let liItem of liItems){
    liItem.onclick = function(){
        liItem.classList.add('active');
        if(liTmp.classList.contains('active') && liItem.classList.contains('active')){
            liTmp.classList.remove('active');
        } else{
        liItem.classList.add('active');
        }
        liTmp = liItem;
        // возвращаем значение li в input
        input.value = liTmp.textContent;
        // активное состояние input
        input.oninput();
    }
}
//функция исключения для первого элемента
// liItems[0].onclick = function () {
//     liItems[0].classList.add('active');
//     input.value = liItems[0].textContent;
//     input.oninput();
// }
//адаптивное меню
let burger = document.querySelector('.header__mobile-burger');

burger.onclick = function(){
    burger.classList.toggle('change');
}
