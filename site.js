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
function drawBooks(books){
  const tableBodyElement = document.getElementById("myTableBody")
  books.forEach((book) => {
    const rowElement = document.createElement("tr")
    const titleElement = document.createElement("td");
    const authorElement = document.createElement("td");
    const summaryElement = document.createElement("td");
    titleElement.textContent = book.title;
    summaryElement.textContent = book.summary;
    authorElement.textContent = book.author;
    rowElement.addEventListener(("click"),(book) =>{
      console.log("book has been clicked")
    })
    rowElement.appendChild(titleElement);
    rowElement.appendChild(authorElement);
    rowElement.appendChild(summaryElement);
    tableBodyElement.appendChild(rowElement);
  });

  books.forEach(book => {
    const firstBookHtml = bookHTML(book)
    tableBodyElement.innerHTML += firstBookHtml;
  })
}

drawBooks(bookList);
