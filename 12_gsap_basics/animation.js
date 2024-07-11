

// gsap.to('.square', {
//   x: 300,
//   y: 600,
//   duration: 3,
// })

// gsap.from('.circle', {
//   x: 500,
//   y: 300,
//   background: 'pink',
//   duration: 2,
//   delay: 3
// })

// gsap.fromTo('.rect', {
//   x: 400,
//   y: 400
// }, {
//   x: 800,
//   y: 800,
//   duration: 4,
//   delay: 5
// })


const tl = gsap.timeline().pause()

console.log(tl)

tl.to('.square', {
  x: 300,
  y: 600,
  duration: 3,
})
.to('.square', {
  x: 350,
  y: 100,
  background: 'black',
  duration: 3
})


// Events

document.querySelector('.play').addEventListener('click', e => {
  tl.resume()
  //tl.play()
})

document.querySelector('.pause').addEventListener('click', e => {
  tl.pause()
})

document.querySelector('.seek').addEventListener('click', e => {
  // tl.seek(3)
  tl.progress(0.5)
})

document.querySelector('.restart').addEventListener('click', e => {
  tl.restart()
})

document.querySelector('.reverse').addEventListener('click', e => {
  tl.reverse()
})