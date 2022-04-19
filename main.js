let burger = document.querySelector('.burger-div-header');
let navigation = document.querySelector('.navigation');
let list = document.querySelector('.navigation nav')
burger.addEventListener('click', function(){
    navigation.classList.toggle("block");
    list.classList.toggle("block");
    // navigation.style.transition = "all 0.3s"
    // list.style.transition = "all 0.3s"
})