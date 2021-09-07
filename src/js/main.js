
// Нажатие на кнопку "заказать"
let order = document.querySelector('.auth__order-btn');

order.onclick = function(){
    order.classList.toggle('disabled');
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
liItems[0].onclick = function () {
    liItems[0].classList.add('active');
    input.value = liItems[0].textContent;
    // input.oninput();
}