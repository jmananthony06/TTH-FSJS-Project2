const listItems = document.querySelectorAll('.student-item');
const itemsPerPage = 10;
const a = document.querySelectorAll('.pagination a');

//The logic in showing how there are going to be 10 items per page
const showPage = function(list, page) {
  let max = (page * itemsPerPage) - itemsPerPage;
  let min = page * itemsPerPage;

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
    const pageNumbers = Math.ceil(listItems.length / 10);
    const page = document.querySelector('.page');
    const pageDiv = document.createElement('div');
    const ulPage = document.createElement('ul');
    pageDiv.className = 'pagination';
    page.appendChild(pageDiv);
    pageDiv.append(ulPage);

    for (let i = 0; i <= pageNumbers; i++) {
      const li = document.createElement('li');
      const a = document.createElement('a');
        a.href = '#';
        a.textContent = i + 1;
        li.appendChild(a);
        pageDiv.appendChild(li);


//Event Listener
a.addEventListener('click', (event) => {
  showPage(listItems, i + 1);
  const activeClass = document.querySelector('.active');
  activeClass.className = ''; // cannot set property 'className' of null at HTMLAnchorElement.<anonymous>
  console.log(activeClass.className);
  event.target.className = 'activeClass';
});

}
const makeActive = document.querySelector('div.pagination a');
makeActive.className = 'activeClass';
}
//executes functions above
showPage(listItems, 1);
appendPageLinks(listItems);
