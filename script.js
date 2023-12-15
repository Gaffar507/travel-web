let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let loginBtn = document.querySelector('#login-btn');
let closeDiv = document.querySelector('#close-div');
let formClose = document.querySelector('#form-close');
let menuBar = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let vidBtn = document.querySelectorAll('.vid-btn');
let video = document.querySelector('#video-slider');
let home = document.querySelector('#home');


window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menuBar.classList.remove('fa-times');
    navbar.classList.remove('active');
    document.querySelector('.login-form-container').classList.remove('active')
};

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});
menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

loginBtn.addEventListener('click', ()=>{
    document.querySelector('.login-form-container').classList.add('active')
})
formClose.addEventListener('click', ()=>{
    document.querySelector('.login-form-container').classList.remove('active')
})
closeDiv.addEventListener('click', ()=>{
    document.querySelector('.login-form-container').classList.remove('active')
})
home.addEventListener('click',()=>{
    if (navbar.classList.contains('active') ) {
        menuBar.classList.toggle('fa-times');
        navbar.classList.remove('active')
    }
})

vidBtn.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active')
        btn.classList.add('active')
        let src = btn.getAttribute('data-src')
        video.src=`./assets/videos/${src}.mp4`
    })
})