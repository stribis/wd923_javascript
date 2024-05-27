

// const heading = document.getElementById('main-heading')
const heading = document.querySelector('.main-heading')
const firstItems = document.querySelector('ul li')
const listItems = document.querySelectorAll('ul li')


// heading.innerText = 'Hello Switzerland :D'
// heading.textContent = 'Hello from Zürich :)'

heading.innerHTML = 'There is a div in this heading !'
// heading.style.color = 'red'
// heading.style.border = 'solid 1px black'
// heading.style.backgroundColor  ='grey';

heading.setAttribute('style', 'color: red; border:solid 1px black; background-color: grey;')
// console.log(heading.classList)

heading.classList.add('lorem')
heading.classList.remove('popcorn')
heading.classList.toggle('foo')