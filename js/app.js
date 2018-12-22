// My js code

// TODO: Remove in production
console.log('start program');

// TODO: Remove test code after optomization/refactoring
// console.log(captions)

// captions.forEach((element, x, y) => {
//   console.log(element)
//   console.log('x: ', x)
//   console.log('y: ', y)
// });

// We need the text in the search input
const inputSearch = document.querySelector('.input__search');
const captions = document.querySelectorAll('figcaption');

// Focus input field on page enter
inputSearch.focus();

// Filter images
inputSearch.addEventListener('input', (e) => {
  for (let i = 0; i < captions.length; i += 1) {
    let figure = captions[i].parentElement;

    if (captions[i].textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())) {
      figure.style.display = 'block';
    } else {
      figure.style.display = 'none';
    }
  }

});

// Images
const a = document.querySelectorAll('a');
const figcaptions = document.querySelectorAll('figcaption');
const title = figcaptions[0].textContent;

//  This adds the text in the <figcaption> elements to the jQuery fancybx dataset

// Loop through all figures
const figures = document.querySelectorAll('figure');

for (let i = 0; i < figures.length; i += 1) {
  const element = figures[i];
  const dataAttribute = element.firstElementChild.dataset;
  const figcaption = element.lastElementChild;

  // Dynamically add data-caption attributes containing <figcaption> text
  dataAttribute.caption = figcaption.textContent;
}