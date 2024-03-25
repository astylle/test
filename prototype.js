const titleGrabber = document.querySelector("#title");
const authorGrabber = document.querySelector("#author");
const pageGrabber = document.querySelector("#page");
const readGrabber = document.querySelector('#read');
const submitGrabber = document.getElementById("form");

let myLibrary = [];

submitGrabber.addEventListener('submit', function(event){
  event.preventDefault();
  const id = myLibrary.length;
  const title = titleGrabber.value;
  const author = authorGrabber.value;
  const page = pageGrabber.value;
  const read = readGrabber.checked;

  console.table([id,title,author,page,read]);
  let book = createNewBook(id,title,author,page,read);
  myLibrary = [...myLibrary];

  console.log();
  
  myLibrary.push(book);
  book.createBookCard();
  resetValues();
})

function Book(id,title, author, page, read){
  this.id = id;
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
}

function createNewBook(id, title,author,page,read){
  return new Book(id, title, author, page, read)
}

//selected from HTML
const bookLibrary = document.querySelector("#bookLibrary")
const addBook = document.querySelector('#addBook');
 
Book.prototype.createBookCard = function(){
    
  let motherDiv = document.createElement('div');
    motherDiv.className = "child";
    motherDiv.id = myLibrary.length;

      let divTitle = document.createElement('div');
      divTitle.textContent = `Title: ${myLibrary[myLibrary.length - 1].title}`;
      motherDiv.appendChild(divTitle);
      
      let divAuthor = document.createElement('div');
      divAuthor.textContent =  `Author: ${myLibrary[myLibrary.length - 1].author}`;
      motherDiv.appendChild(divAuthor);

      let divPage = document.createElement('div');
      divPage.textContent = `Page Number: ${myLibrary[myLibrary.length - 1].page}`;
      motherDiv.appendChild(divPage);

      motherDiv.appendChild(readStatus());
      motherDiv.appendChild(deletePost());
      motherDiv.appendChild(changeReadStatus());
      bookLibrary.appendChild(motherDiv);

      // changeReadStatus();
      
  }
function readStatus(){
  let readPage = document.createElement('div');
  readPage.id = "Read Status: " + myLibrary.length;
  readPage.textContent = `Read Status: ${myLibrary[myLibrary.length - 1].read}`;
  return readPage;
}

function changeReadStatus(){
  const readButtonChange = document.createElement('button');
  readButtonChange.innerText = "Change Read Status";
  readButtonChange.onclick = (event) => {
    let bookId = event.target.parentNode.id;
    console.log("book id = " + bookId);
    myLibrary[bookId-1].read = !myLibrary[bookId-1].read;
    console.log(myLibrary[bookId-1].read);

    const readStatus = document.querySelector(`[id="Read Status: ${bookId}"]`);
    readStatus.textContent = `Read Status: ${myLibrary[myLibrary.length - 1].read}`;
   }

  return readButtonChange;
}

function deletePost(){
  let deleteButton = document.createElement('BUTTON');
  deleteButton.innerText = "Delete Book";
  deleteButton.id = myLibrary.length.toString();
  deleteButton.onclick = (event) => {
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