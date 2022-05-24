

var menuBtn = document.getElementById('menu')
var menu = document.querySelector('.hide')
var show = document.querySelector('.show');
var body = document.querySelector('body')

var backgroundGradient = document.querySelector('.backgroundGradient')
var closeMenu = document.getElementById('close-menu')

// when you click to expand the menu icon
menuBtn.addEventListener('click', function() {
    menu.classList.toggle('hide');
    backgroundGradient.classList.toggle('show');
    
    closeMenu.classList.toggle('hide');
    menuBtn.classList.toggle('hide');
})

closeMenu.addEventListener('click', function() {
    var menuDropdown = document.querySelector('.menu_items')
    menuDropdown.classList.toggle('hide');
    backgroundGradient.classList.toggle('show');

    if (menuBtn.classList.contains('hide')) {
        menuBtn.classList.remove('hide');
        closeMenu.classList.add('hide');
    }
})


// features button dropdown
var featuresDropdown = document.querySelector('.features')
var featuresBtn = document.getElementById('features')
featuresBtn.addEventListener('mouseenter', function() {
    featuresDropdown.classList.toggle('show');
})

// company button dropdown
var companyDropdown = document.querySelector('.company')
var companyBtn = document.getElementById('company')
companyBtn.addEventListener('mouseenter', function() {
    companyDropdown.classList.toggle('show');
})
