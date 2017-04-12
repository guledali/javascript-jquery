const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');


const descriptionInput = document.querySelector('input.description');

const desctiptionP = document.querySelector('p.description');

const descriptionButton = document.querySelector('button.description');

const addItemInput = document.querySelector('input.addItemInput');

const addItemButton = document.querySelector('button.addItemButton');

const removeItemButton = document.querySelector('button.removeItemButton');

// const listItems = document.getElementsByTagName('li');

// for (let i = 0; i < listItems.length; i += 1) {
  listDiv.addEventListener('mouseover', (event) => {
    if (event.target.tagName == 'LI') {
    event.target.textContent =  event.target.textContent.toLowerCase();
          }
  });

  listDiv.addEventListener('mouseout', (event) => {
    if (event.target.tagName == 'LI') {
    event.target.textContent =  event.target.textContent.toUpperCase();
          }
  });

  // document.addEventListener('click', (event) => {
  //   console.log(event.target);
  // });

// }

// can be used as in accordion menu
toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';
  listDiv.style.display = 'none';
    }
});


descriptionButton.addEventListener('click', () => {
  desctiptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  // append is going [to add] li element to ul
  ul.appendChild(li);
  addItemInput.value = '';
});

// removeChild removes the object
removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
  // li.textContent = addItemInput.value;
  // append is going [to add] li element to ul
  ul.removeChild(li);
  // addItemInput.value = '';
});
