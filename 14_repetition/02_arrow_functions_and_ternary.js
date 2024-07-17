

function double (zahl) {
  return zahl * 2
}


// const square = (zahl) => {
//   zahl * zahl
// }

const square = zahl => zahl * zahl



// document.querySelector('.send').addEventListener('click', function (){
//   console.log(this)
//   this.style.backgroundColor = 'red'
// })

// document.querySelector('.send').addEventListener('click', (e) => {
//   console.log(e)
//   e.target.style.backgroundColor = 'red'
// })


// IF ... ELSE

const flag = true

// document.querySelector('.send').addEventListener('click', () => {
//   if ( flag ) {
//     document.body.style.backgroundColor = 'red'
//   } else {
//     console.log('The flag is not raised')
//   }
// })

document.querySelector('.send').addEventListener('click', () => {
  flag ? document.body.style.backgroundColor = 'red' : console.log('The flag is not raised')
})