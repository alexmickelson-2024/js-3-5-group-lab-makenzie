import { bookList } from "./books.js";

// const drawBooks = (books) => {
//   const bookHTML = (book) => `
//     <tr>
//       <td>${book.title}</td>
//       <td>${book.author}</td>
//       <td>${book.summary}</td>
//     </tr>
//   `
// }
var newList = [...bookList];
function drawBooks(books) {
  const tableBodyElement = document.getElementById("myTableBody");
  tableBodyElement.textContent = "";
  books.forEach((book) => {
    const rowElement = document.createElement("tr");
    const titleElement = document.createElement("td");
    const authorElement = document.createElement("td");
    const summaryElement = document.createElement("td");
    titleElement.textContent = book.title;
    summaryElement.textContent = book.summary;
    authorElement.textContent = book.author;
    rowElement.appendChild(titleElement);
    rowElement.appendChild(authorElement);
    rowElement.appendChild(summaryElement);
    rowElement.addEventListener("click", (clickBook) => {
      const titleofBook = document.createElement("p");
      const bookClicked = document.getElementById("selectedBookTitle");
      bookClicked.textContent = "";
      titleofBook.textContent = book.title;
      bookClicked.appendChild(titleofBook);
    });
    tableBodyElement.appendChild(rowElement);
  });

  // books.forEach(book => {
  //   const firstBookHtml = bookHTML(book)
  //   tableBodyElement.innerHTML += firstBookHtml;
  // })
}

function FilterBooks() {
  const filterInput = document.getElementById("filterInput");
  filterInput.addEventListener("input", (inputEvent) => {
    const keyword = inputEvent.target.value.toLowerCase();
    filterbook()

  function filterbook() {
    newList = bookList.filter((filteredBook) =>
      filterTitleDescriptionandAuthor(filteredBook, keyword)
    );
  }
  function filterTitleDescriptionandAuthor(book, keyword) {
    return (
      (book.summary).toLowerCase().includes(keyword) ||
      (book.title).toLowerCase().includes(keyword) ||
      (book.author).toLowerCase().includes(keyword)
    );
  }
  drawBooks(newList);
})
}

FilterBooks();
drawBooks(newList);
