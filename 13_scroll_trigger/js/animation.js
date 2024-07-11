
gsap.registerPlugin(ScrollTrigger)

const featureTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.feature_section',
    // markers: {startColor: 'green', endColor: 'red'},
    scrub: 1,
    end: 'top 33%'
  }
})

featureTl.fromTo('.feature_section .box', {
  y: 100,
  autoAlpha: 0,
}, {
  y: 0,
  stagger: 1,
  autoAlpha: 1
})


// Client Section

const clientTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.client_section',
    markers: {startColor: 'black', endColor: 'blue'},
    scrub: 1,
    pin: true
  }
})

clientTl.fromTo('.client_section .item', {
  y: -50.,
  autoAlpha: 0,
}, {
  y: 0,
  autoAlpha: 1,
  stagger: 1,
  ease: 'none'
})