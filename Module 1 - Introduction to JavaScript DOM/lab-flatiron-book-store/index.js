const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don\'t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

// Write your code here!

// update header of the page to match the name of the bookstore
const bookStoreTitle = document.querySelector("#header");
    bookStoreTitle.textContent = bookStore.name;

// create new elements
const bookList = document.querySelector("#book-list");

// looping through each book in the array
bookStore.books.forEach(book => {
    const bookContainer = document.createElement("li");
        bookContainer.classList.add("list-li");
    
    const bookTitle = document.createElement("h3");
        bookTitle.textContent = book.title;

    const bookAuthor = document.createElement("p");
        bookAuthor.textContent = book.author;

    const bookImage = document.createElement("img");
        bookImage.src = book.imageUrl;

    // appending the elements to the html container
    bookContainer.append(bookTitle, bookAuthor, bookImage);
    // appending the container to the booksList variable
    bookList.append(bookContainer);
});

// bonus challenge to delete a specific element with the id="delete-this"
const deleteThis = document.querySelector("#delete-this");
bookList.removeChild(deleteThis);

// could also do an if condition like if (deleteThis) { deleteThis.remove(); }

// bonus to remove the entire ordered list of books
// bookList.remove();
    