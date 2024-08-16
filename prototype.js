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

  myLibrary.push(book);
  book.createBookCard();

  resetValues();
})

class Book {
  constructor(id,title,author,page,read){
    this.id = id;
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
  }
  
  get divTitle(){
    let divTitle = document.createElement('div');
    divTitle.textContent = `Title: ${myLibrary[this.id].title}`;
    return divTitle;
  }

  get divAuthor(){
    let divAuthor = document.createElement('div');
    divAuthor.textContent =  `Author: ${myLibrary[this.id].author}`;
    return divAuthor;
  }

  get divPage(){
    let divPage = document.createElement('div');
    divPage.textContent = `Page Number: ${myLibrary[this.id].page}`;
    return divPage;
  }

  get readPage(){
    let readPage = document.createElement('div');
    readPage.id = "Read Status: " + myLibrary.length;
    readPage.textContent = `Read Status: ${myLibrary[this.id].read}`;
    return readPage;
  }

  get readButtonChange(){
    let readButtonChange = document.createElement('button');
    readButtonChange.innerText = "Change Read Status";
    readButtonChange.onclick = (event) => {
      let bookId = event.target.parentNode.id;
      console.log("book id = " + bookId);
      myLibrary[bookId-1].read = !myLibrary[bookId-1].read;
      console.log(myLibrary[bookId-1].read);
      const readStatus = document.querySelector(`[id="Read Status: ${bookId}"]`);
      readStatus.textContent = `Read Status: ${myLibrary[this.id].read}`;
    }
    return readButtonChange;
  }

  get deleteButton(){
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete Book";
    deleteButton.id = this.id.toString();
    deleteButton.onclick = (event) => {
      let bookCard = event.target.parentNode;
      console.log(bookCard);
      const bookId = parseInt(this.id);
      myLibrary.splice(bookId, 1);
      bookCard.remove();
    }
    return deleteButton;
  }

  createBookCard(){
  //selected from HTML
  const bookLibrary = document.querySelector("#bookLibrary") 

    let motherDiv = document.createElement('div');
    motherDiv.className = "child";
    motherDiv.id = myLibrary.length;

      motherDiv.appendChild(this.divTitle);
      motherDiv.appendChild(this.divAuthor);
      motherDiv.appendChild(this.divPage);
      motherDiv.appendChild(this.readPage);
      motherDiv.appendChild(this.readButtonChange);
      motherDiv.appendChild(this.deleteButton);

      bookLibrary.appendChild(motherDiv);
  }

}

function createNewBook(id, title,author,page,read){
  return new Book(id, title, author, page, read)
}

function resetValues(){
  titleGrabber.value = "";
  authorGrabber.value = "";
  pageGrabber.value = "";
  readGrabber.checked = false;
}