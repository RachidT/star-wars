const icon = document.getElementById('icon-menu');
const menu = document.getElementById('menu');
const close = document.getElementById('close-icon');
const logo = document.getElementById('logo');
icon.addEventListener('click', function() {
    icon.classList.add('hidden');
    close.classList.add('appear');
    menu.classList.add('open');
});
close.addEventListener('click', function() {
    icon.classList.add('burger-menu');
    menu.classList.remove('open');
    close.classList.remove('appear');
    icon.classList.remove('hidden');
    logo.classList.remove('hide-logo');
});
window.addEventListener('scroll', function() {
    if (window.scrollY > 475) {
        icon.classList.add('black');
        close.classList.add('black');
    } else {
        icon.classList.remove('black');
        close.classList.remove('black');
    }
});
const image = document.getElementsByClassName('bg-header');
new simpleParallax(image, {
    scale: 1.5,
    overflow: true
});

//# sourceMappingURL=index.017db2f2.js.map
