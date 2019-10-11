const listItems = document.querySelectorAll('.student-item');
const itemsPerPage = 10;

//The logic in showing how there are going to be 10 items per page
const showPage = function(list, page) {
  let max = page * itemsPerPage;
  let min = (page * itemsPerPage) - itemsPerPage;

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
    let page = document.querySelector('.page');
    let pageDiv = document.createElement('div');
    let ulPage = document.createElement('ul');
    pageDiv.className = 'pagination';
    page.appendChild(pageDiv);
    pageDiv.append(ulPage);

    for (let i = 0; i < pageNumbers; i++) {
      const li = document.createElement('li');
      const a = document.createElement('a');
        a.href = '#';
        a.textContent = i + 1;
        li.appendChild(a);
        pageDiv.appendChild(li);




//Event Listener
a.addEventListener('click', (event) => {
  showPage(listItems, event.target.textContent);
const aTags = document.querySelectorAll('.pagination a');

for(i = 0; i < aTags.length; i++){
  aTags[i].classList.remove('active');
}

event.target.classList.add('active');


});

//executes functions above
showPage(listItems, 1);
appendPageLinks(listItems);
