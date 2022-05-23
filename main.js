

var menuBtn = document.getElementById('menu')
var menu = document.querySelector('.hide')
var show = document.querySelector('.show');
var body = document.querySelector('body')

var backgroundGradient = document.querySelector('.backgroundGradient')


// when you click to expand the menu icon
menuBtn.addEventListener('click', function() {
    menu.classList.toggle('hide');
    backgroundGradient.classList.toggle('show');
})