
const icon = document.getElementById('icon-menu');
const menu = document.getElementById('menu')
const close = document.getElementById('close-icon')
const logo = document.getElementById('logo')
const ad = document.getElementById('ad')

icon.addEventListener('click',function(){
  icon.classList.add('hidden')
  close.classList.add('appear')
  menu.classList.add('open')
  logo.classList.add('hide-logo')
});

close.addEventListener('click', function() {
    icon.classList.add('burger-menu')
    menu.classList.remove('open')
    close.classList.remove('appear')
    icon.classList.remove('hidden')
    logo.classList.remove('hide-logo')
})

window.addEventListener('scroll', function() {
  if(window.scrollY > 800) {
    icon.classList.add('black')
    close.classList.add('black')
  } else {
    icon.classList.remove('black')
  }

  if(window.scrollY > 900) {
    ad.style.position = "fixed"
    ad.style.top = 10 + "rem"
  }

  if(window.scrollY > 1908 || window.scrollY < 900) {
    ad.style.position = 'absolute'
    ad.style.top = 5 + 'rem'
  }
})

const image = document.getElementsByClassName('bg-header')
new simpleParallax(image, {
  scale: 1.5,
  overflow: true,
})
