const library = [];

function addBook(title, author) {
  let newBook = {
    bookTitle: title,
    bookAuthor: author,
  };
  library.push(newBook);
}

function viewBooks() {
  for (let i = 0; i < library.length; i++) {
    console.log(library[i].bookTitle);
    console.log(library[i].bookAuthor);
  }
}

addBook("Atomic Habits", "James Clear");
addBook("Deep Work", "Cal Newport");
viewBooks();
