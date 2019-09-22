
const studentList = document.querySelector('.student-list');
const listItems = document.querySelectorAll('.student-item');  //indiv student
const pageContainer = document.querySelector('.page');
const pageHead = document.querySelector('page-header');
const peoplePerPage = 10;

//Show Page One
showPage(1, listItems);

//Pagination
appendPageLinks(listItems);

//How many pages are added based on peoplePerPage
const totalPages = () => {
  let pageNumbers = Math.ceil(studentItems.length / peoplePerPage);
  return pageNumbers;
}

//Shows 10 items per page
const tenPerPage = () => {
  for (i = 0; i < listItems; i++){
    if (i < listitems) {
      listItems.style.display = '';
    } else{
        listItems[i].style.display = 'none';
    }
  }
}

//Create and append Pagination appendPageLinks

const appendLinks = (list) => {
    let page = document.querySelector('.page');
    let pageDiv = document.createElement('div');
    pageDiv.className = 'pagination';
    page.appendChild(pageDiv);
    const ulPage = document.creatElement('ul');
    pageDiv.append(ulPage);
    const button = document.querySelector('.pagination ul');
}

//Event Listener

button.addEventListener('click', (event) => {
  let button = parseInt(event.target.textContent);
  let max = button * 10;
  let min = max - 10;
  for (i = 0; i < listItems; i++) {
    if (i >= min && i < max) {
      listItems.[i].style.display = '';
    }  else {
        listItems.style.display = 'none';
    }
  }
}
});


//executes functions above
totalPages();
tenPerPage();
appendPageLinks();
