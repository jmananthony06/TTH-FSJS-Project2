const listItems = document.querySelectorAll('.student-item');
const itemsPerPage = 10;


//The logic in showing how there are 10 items per page
const showPage = function(list, page) {
  let max = page * itemsPerPage - 1;
  let min = page * itemsPerPage + 1;
  for (i = 0; i < listItems; i++) {
    if (i >= min && i < max) {
      listItems.style.display = '';
    }  else {
        listItems.style.display = 'none';
    }
  }
};

//How many pages are added based on peoplePerPage
//Create and append the appendPageLinks so each page will
//load 10 people per page, no matter what page number ypu're on
const appendPageLinks = (list) => {
    let pageNumbers = Math.ceil(listItems.length / itemsPerPage);
      return pageNumbers;
    let page = document.querySelector('.page');
    let pageDiv = document.createElement('div');
    pageDiv.className = 'pagination';
    page.appendChild(pageDiv);
    const ulPage = document.createElement('ul');
    pageDiv.append(ulPage);
    const button = document.querySelector('.pagination ul');

    for (let i = 0; i <= appendPageLinks(); i++) {
      let li = document.createElement('li');
      let a = document.createElement('a');
        a.href = '#';
        a.textContent = i;
        button.appendChild(li);
        li.appendChild(a);
  }
};

//Event Listener
document.querySelector('.student-item').addEventListener('click', (event) => {
  let button = parseInt(event.target.textContent);
});

//executes functions above
showPage();
appendPageLinks();
