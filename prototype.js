const titleGrabber = document.querySelector("#title");
const authorGrabber = document.querySelector("#author");
const pageGrabber = document.querySelector("#page");
const readGrabber = document.querySelector('#read');
const submitGrabber = document.getElementById("form");

let myLibrary = [];

submitGrabber.addEventListener('submit', function(event){
  event.preventDefault();
  const title = titleGrabber.value;
  const author = authorGrabber.value;
  const page = pageGrabber.value;
  const read = readGrabber.checked;

  console.table([title,author,page,read]);
  console.log(titleGrabber.value);
  let book = createNewBook(title,author,page, read);
  myLibrary = [...myLibrary,book];

  console.log(book);
  myLibrary.push(book);
  book.createBookCard();

  resetValues();
})

function Book(title, author, page, read){
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
}

function createNewBook(title,author,page,read){
  return new Book(title, author, page, read)
}

//selected from HTML
const bookLibrary = document.querySelector("#bookLibrary")
const addBook = document.querySelector('#addBook');
 
Book.prototype.createBookCard = function(){
    let motherDiv = document.createElement('div');
    motherDiv.className = "child";
    // motherDiv.classList.add(motherDiv);
      let divTitle = document.createElement('div');
      divTitle.textContent = `Title: ${myLibrary[myLibrary.length - 1].title}`;
      motherDiv.appendChild(divTitle);
      
      let divAuthor = document.createElement('div');
      divAuthor.textContent =  `Author: ${myLibrary[myLibrary.length - 1].author}`;
      motherDiv.appendChild(divAuthor);

      let divPage = document.createElement('div');
      divPage.textContent = `Page Number: ${myLibrary[myLibrary.length - 1].page}`;
      motherDiv.appendChild(divPage);
      motherDiv.appendChild(readStatus())
      motherDiv.appendChild(changeReadStatus())
      motherDiv.appendChild(deletePost());
      bookLibrary.appendChild(motherDiv);

  }
function readStatus(){
  let readPage = document.createElement('div');
  readPage.id = myLibrary.length;
  readPage.textContent = `Read Status: ${myLibrary[myLibrary.length - 1].read}`;
  return readPage;
}

function changeReadStatus(){
  let readCheckbox = document.createElement('button');
  readCheckbox.textContent = "Change?";
  
  readCheckbox.addEventListener('click', function () {
    myLibrary[myLibrary.length - 1].read = !myLibrary[myLibrary.length - 1].read;
    const updateReadStatus = document.getElementById(myLibrary.length);
    updateReadStatus.textContent = `Read Status: ${myLibrary[myLibrary.length - 1].read}`;
  })
  return readCheckbox;
}

function deletePost(){
  let deleteButton = document.createElement('BUTTON');
  deleteButton.innerText = "Delete Book";
  deleteButton.id = "Delete Post " + myLibrary.length.toString();
  deleteButton.onclick = function(){
    this.parentNode.parentNode.removeChild(this.parentNode);    
  } 
  return deleteButton;
}

function resetValues(){
  titleGrabber.value = "";
  authorGrabber.value = "";
  pageGrabber.value = "";
  readGrabber.checked = false;
}