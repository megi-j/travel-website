let burger = document.querySelector('.burger-div-header');
let navigation = document.querySelector('.navigation');
// let list = document.querySelector('.navigation nav')
burger.addEventListener('click', function(){
    if(navigation.style.display === "block"){
        navigation.style.display = "none";
        
    }else{
        navigation.style.display = "block";
        
    }
    // navigation.classList.toggle("block");
})