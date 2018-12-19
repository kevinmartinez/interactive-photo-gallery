// My js code
console.log('start program');

// Captions
const captions = document.querySelectorAll('figcaption');

// TODO: Remove test code after optomization/refactoring
// console.log(captions)

// captions.forEach((element, x, y) => {
//   console.log(element)
//   console.log('x: ', x)
//   console.log('y: ', y)
// });

// Input field
const inputSearch = document.querySelector('.input__search');

// Focus input field on page enter
inputSearch.focus()

// Filter images
inputSearch.addEventListener('input', (e) => {
  for (let i = 0; i < captions.length; i += 1) {
    if (captions[i].textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())) {
      captions[i].parentElement.style.display = 'block';
    } else {
      captions[i].parentElement.style.display = 'none';
    }
  }

});

// Images
const a = document.querySelectorAll('a');
const figcaptions = document.querySelectorAll('figcaption');
const title = figcaptions[0].textContent;


// console.log(a[0].dataset);

// a[0].dataset.title = title;


// Loop through all figures

const figures = document.querySelectorAll('figure');
// console.log(figures);

// TODO: Refactor?

for (let i = 0; i < figures.length; i += 1) {
  // console.dir(figures[i])
  // console.dir(figures[i].firstElementChild)
  // console.log(figures[i].lastElementChild)
  // console.log(figures[i].firstElementChild.dataset["data-caption"])

  figures[i].firstElementChild.dataset.caption = figures[i].lastElementChild.textContent;
}