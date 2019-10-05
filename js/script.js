const studentList = document.querySelector('.student-list');
const listItems = document.querySelectorAll('.student-item');
const pageContainer = document.querySelector('.page');
const pageHead = document.querySelector('page-header');
const peoplePerPage = 10;


//The logic in showing how there are 10 items per page
const tenPerPage = () => {
  for (i = 0; i < listItems; i++){
    if (i < listitems) {
      listItems.style.display = '';
    } else{
        listItems[i].style.display = 'none';
    }
  }
}

//How many pages are added based on peoplePerPage
//Create and append the appendPageLinks so each page will
//load 10 people per page, no matter what page number ypu're on
const appendPageLinks = (list) => {
    let pageNumbers = Math.ceil(studentList.length / peoplePerPage);
    return pageNumbers;
    let page = document.querySelector('.page');
    let pageDiv = document.createElement('div');
    pageDiv.className = 'pagination';
    page.appendChild(pageDiv);
    const ulPage = document.creatElement('ul');
    pageDiv.append(ulPage);
    const button = document.querySelector('.pagination ul');
}

//Elements on numbered page
for (let i = 0; i <= pages(); i++) {
  let li = document.createElement('li');
  let a = document.createElement('a');
    a.href = '#';
    a.textContent = i;
    button.appendChild(li);
    li.appendChild(a);
}

//Event Listener
studentList.addEventListener('click', (event) => {
  let button = parseInt(event.target.textContent);
  let max = button * 10;
  let min = max - 10;
  for (i = 0; i < listItems; i++) {
    if (i >= min && i < max) {
      listItems.i.style.display = '';
    }  else {
        listItems.style.display = 'none';
    }
  }
});

//executes functions above
pages();
tenPerPage();
appendPageLinks();
