const listItems = document.querySelectorAll('.student-item');
const itemsPerPage = 10;


//The logic in showing how there are 10 items per page
const showPage = function(list, page) {
  let max = (page * itemsPerPage) - itemsPerPage;
  let min = (page * itemsPerPage);
  for (i = 0; i < list.length; i++) {
    list[i].style.display = 'none';
    if (i >= min && i < max) {
        list[i].style.display = '';
    }
  }
}

//How many pages are added based on peoplePerPage
//Create and append the appendPageLinks so each page will
//load 10 people per page, no matter what page number you're on
const appendPageLinks = (list) => {
    let pageNumbers = Math.ceil(listItems.length / 10);
      return pageNumbers;
    let page = document.querySelector('.page');
    let pageDiv = document.createElement('div');
    let ulPage = document.createElement('ul');
    pageDiv.className = 'pagination';
    page.appendChild(pageDiv);
    pageDiv.append(ulPage);

    for (let i = 0; i <= pageNumbers; i++) {
      let li = document.createElement('li');
      let a = document.createElement('a');
        a.href = '#';
        a.textContent = i + 1;
        div.appendChild(li);
        li.appendChild(a);
  }
};

//Event Listener
a.addEventListener('click', (event) => {  //is not a function? (or) a is not defined at...
  showPage(listItems, i + 1);
  const activeClass = document.querySelector(''); // have to sleect class from html, but which class?
  active.className = '';
  console.log(active.className);
  e.target.className = 'active';
});

//executes functions above
showPage(listItems, 1);
appendPageLinks(listItems);
