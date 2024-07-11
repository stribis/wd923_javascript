

const vw = window.innerWidth
const vh = window.innerHeight
const cols = 24
const squareSize = Math.floor(vw / cols)
const rows = Math.floor(vh / squareSize)
const numSquares = rows * cols

const container = document.querySelector('body')

for ( let i = 0; i < numSquares; i++) {
  const square = document.createElement('div')
  square.classList.add('box')
  square.setAttribute('style', `width: ${squareSize}px; height: ${squareSize}px;`)
  container.append(square)
}


// After inserting square to page

gsap.to('.box', {
  opacity: 0,
  background: 'rgb(112, 0, 112)',
  borderRadius: '50%',
  scale: 0.1,
  ease: 'ease.inOut',
  y: 33,
  repeat: -1,
  repeatDelay: 1,
  yoyo: true,
  stagger: {
    amount: 2,
    grid: 'auto',
    from: 'center'
  }
})