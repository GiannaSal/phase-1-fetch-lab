function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json =>
    {renderBooks(json)
    })
}
//     function renderBooks(books){
      
//     }
  
//   let books = document.createElememt("li")
//   books.innerHTML = `
//   <div class = "render"> 
//   ${books.title}
//   </div>`
//   document.querySelector("main").appendChild(books)
  

// //   // To pass the tests, don't forget to return your fetch!
  
// // }

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}
renderBooks()

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
