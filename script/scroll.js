var AnimateTop = {
  distance: '20em',
  origin: 'bottom',
  opacity: 0.5,
  duration: 1000
}

var AnimatedTopHero = {
  distance: '20em',
  origin: 'bottom',
  opacity: 0.5,
  duration: 2500

}

var AnimateBottom = {
  distance: '12em',
  origin: 'top',
  opacity: 0,
  delay: 500,
  duration: 1000
}

var AnimatedLeft = {
  distance: '10em',
  origin: 'left',
  opacity: 0,
  delay: 150
}

ScrollReveal().reveal('.left', AnimatedLeft)
ScrollReveal().reveal('.top-hero', AnimatedTopHero)
ScrollReveal().reveal('.top', AnimateTop);
ScrollReveal().reveal('.bottom', AnimateBottom);
