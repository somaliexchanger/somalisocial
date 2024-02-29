let nav = document.querySelector('.nav')
let menubtn = document.querySelector('.fa-bars')
let menubtnclose = document.querySelector('.fa-times')
let mainnav = document.querySelector('.nav-c')
let btn = document.querySelector('.btn')
menubtn.addEventListener('click',()=>{
   nav.classList.add('shownav')
   menubtn.classList.remove('fa-bars')
   menubtnclose.classList.add('showclose')
})
menubtnclose.addEventListener('click',()=>{
    nav.classList.remove('shownav')
    menubtn.classList.add('fa-bars')
    menubtnclose.classList.remove('showclose')
})

