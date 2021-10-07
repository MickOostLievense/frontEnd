//uitklappen menu (small screen)

var menuBalk = document.querySelector('header nav');
var menuKnop = document.querySelector('header nav img');

menuKnop.addEventListener('click', function() {
    menuBalk.classList.toggle('uitgeklaptMenu');
})