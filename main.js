

var menuBtn = document.getElementById('menu')
var menu = document.querySelector('.hide')
var show = document.querySelector('.show');
var body = document.querySelector('body')
var menuItems = document.querySelector('.menu_items')

var backgroundGradient = document.querySelector('.backgroundGradient')
var closeMenuBtn = document.getElementById('close-menu')

// when you click to expand the menu icon
menuBtn.addEventListener('click', function() {

    menu.classList.remove('hide');
    menuItems.classList.toggle('animation');
    backgroundGradient.classList.add('show');
    
    //swaps out the menu button
    closeMenuBtn.classList.toggle('hide');
    menuBtn.classList.toggle('hide');
})

// when you click on the close menu icon
closeMenuBtn.addEventListener('click', function() {
    var menuDropdown = document.querySelector('.menu_items')
    menuItems.classList.toggle('animation');
    
        backgroundGradient.classList.toggle('show');
        menuDropdown.classList.toggle('hide');

//  this part makes the previous open menu icon dissappear and turn into the cross
    if (menuBtn.classList.contains('hide')) {
        menuBtn.classList.remove('hide');
        closeMenuBtn.classList.add('hide');
    } 
})

var companyArrow = document.getElementsByClassName('dropdownArrow')
var Dropdown = document.getElementsByClassName('features')

// features button dropdown
var featuresBtn = document.getElementById('features')
featuresBtn.addEventListener('click', function() {
    Dropdown[0].classList.toggle('show');
    // turns the dropdown arrow upside down
        if (Dropdown[0].classList.contains('show')) {
            companyArrow[0].classList.add('rotated');
        } else {
            companyArrow[0].classList.remove('rotated');
        }
})


// company button dropdown
var companyBtn = document.getElementById('company')
    companyBtn.addEventListener('click', function() {
        Dropdown[1].classList.toggle('show');
        companyArrow[1].classList.toggle('rotated');
    })



