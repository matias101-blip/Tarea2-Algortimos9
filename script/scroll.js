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

var AnimatedRight = {
  distance: '10em',
  origin: 'right',
  opacity: 0,
  delay: 150
}

var AnimatedLeftHero = {
  distance: '10em',
  origin: 'left',
  opacity: 0,
  duration: 2000
}

var AnimatedRightHero = {
  distance: '10em',
  origin: 'right',
  opacity: 0,
  duration: 2000
}
ScrollReveal().reveal('.right-hero', AnimatedRightHero);
ScrollReveal().reveal('.left-hero', AnimatedLeftHero);
ScrollReveal().reveal('.right', AnimatedRight);
ScrollReveal().reveal('.left', AnimatedLeft);
ScrollReveal().reveal('.top-hero', AnimatedTopHero)
ScrollReveal().reveal('.top', AnimateTop);
ScrollReveal().reveal('.bottom', AnimateBottom);
