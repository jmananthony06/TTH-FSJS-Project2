const listItems = document.querySelectorAll('.student-item');
const itemsPerPage = 10;
const aTags = document.querySelectorAll('.pagination a');

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
    const pageNumbers = Math.ceil(listItems.length / 10);
    const page = document.querySelector('.page');
    const pageDiv = document.createElement('div');
    const ulPage = document.createElement('ul');
    pageDiv.className = 'pagination';
    page.appendChild(pageDiv);
    pageDiv.append(ulPage);

    for (let i = 0; i < pageNumbers; i++) {
      const li = document.createElement('li');
      const aTags = document.createElement('a');
        aTags.href = '#';
        aTags.textContent = i + 1;
        li.appendChild(aTags);
        pageDiv.appendChild(li);


//Event Listener
aTags.addEventListener('click', (event) => {
  showPage(listItems, i + 1);
  event.target.className = "active";
aTags.className = '';

for(i = 0; i < aTags; i++){
  aTags[i]classList.remove('active');
}

event.target.classList.add('active');

});

}
const makeActive = document.querySelector('div.pagination a');
makeActive.className = 'active';
}
//executes functions above
showPage(listItems, 1);
appendPageLinks(listItems);
