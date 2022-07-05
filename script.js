const menuBtn = document.querySelector('.menu-btn')
const menuSecond = document.querySelector('.menuSecond')

menuBtn.addEventListener('click',()=>{
    menuSecond.classList.toggle('mobile-menu')
});