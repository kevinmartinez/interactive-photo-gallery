// My js code
console.log('start program');

// Image search

// Input field
const inputSearch = document.querySelector('.input__search');
console.log(inputSearch);

// Filter images
inputSearch.addEventListener('input', (e) => {
  console.log(e);
  for (let i = 0; i < captions.length; i += 1) {
    if (captions[i].textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())) {
      console.dir(captions[i]);
      console.log(captions[i].textContent);
      captions[i].parentElement.style.display = 'block';
    } else {
      captions[i].parentElement.style.display = 'none';
    }
  }

});

// Images
const captions = document.querySelectorAll('figcaption');

// Searchfilter
const buttonSearch = document.querySelector('.button__search');