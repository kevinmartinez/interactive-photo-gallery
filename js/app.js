// My js code
console.log('start program')

// Image search

// Input field
const inputSearch = document.querySelector('.input__search')
console.log(inputSearch)

inputSearch.addEventListener('input', (e) => {
  console.log(inputSearch.value)
})

// Images
const captions = document.querySelectorAll('figcaption')

for (let i = 0; i <= captions.length; i += 1) {
  console.log(captions[i])
}

// Searchfilter
const buttonSearch = document.querySelector('.button__search')

buttonSearch.addEventListener('click', (e) => {

})
