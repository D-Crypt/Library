let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = () => {
        let information = "";
        const readString = isRead ? "has been read" : "not read yet";

        information += title + " by " + author + ", " + pages + " pages, " + readString;
        return information;
    }
}

theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(theHobbit.info());

function addBookToLibrary() {
    const title = window.prompt("Enter book title: ");
    const author = window.prompt("Enter author: ");
    const pages = window.prompt("Enter number of pages: ");
    const isRead = false;
    const book = new Book(title, author, pages, isRead);
    myLibrary.push(book);
}

function displayEachBook(array) {
    array.forEach(book => {
        book.info();
    });
}

addBookToLibrary();
console.log(displayEachBook(myLibrary));