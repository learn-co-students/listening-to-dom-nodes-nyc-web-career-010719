// using this file is optional
// you can also load the code snippets in using your browser's console

//add a click listener to the 'main' element that triggers an alert
const main = document.getElementById('main')

main.addEventListener('click', (e) => {
  alert("I was clicked!")
})

//prevent a user from entering the character 'g' in the input field
const input = document.querySelector('input')

input.addEventListener('keydown', (e) => {
  if (e.key === 'g') {
    return e.preventDefault()
  } else {
    console.log(e.key)
  }
})

//add listeners to all divs and log a message indicated the bubble
let divs = document.querySelectorAll('div')

function bubble(e) {
  console.log(this.firstChild.nodeValue.trim() + ' bubbled')
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}

//show capturing behavior vs bubbling
divs = document.querySelectorAll('div')

function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured')
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', capture, true);
}

//demonstrate .stopPropogation
const divs = document.querySelectorAll('div')

function bubble(e) {
  e.stopPropogation()

  console.log(this.firstChild.nodeValue.trim() + " bubbled")
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble)
}
