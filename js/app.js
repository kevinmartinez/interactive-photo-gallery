// My js code
console.log('start program');

// Image search

// Captions
const captions = document.querySelectorAll('figcaption');

// Input field
const inputSearch = document.querySelector('.input__search');

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
console.log(figures);

// TODO: Refactor
for (let i = 0; i < figures.length; i += 1) {
  // console.log(figures[i])
  // console.log(figures[i].firstElementChild)
  // console.log(figures[i].lastElementChild)

  figures[i].firstElementChild.dataset.title = figures[i].lastElementChild.textContent;
}

// Lightbox settings/options

lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  maxWidth: 600,
  disableScrolling: true,
  positionFromTop: 100,
  showImageNumberLabel: false,
});
