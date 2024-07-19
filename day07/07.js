// Activity 01

const book = {
    title: "Please Stop",
    author: "John Doe",
    year: 1960
};

console.log(book);

console.log(`Title: ${book.title}`);
console.log(`Author: ${book.author}`);

//Activity 02

book.getDetails = function () {
    return `${this.title} by ${this.author}`;
};

console.log(book.getDetails());


book.updateYear = (year) => {
    book.year = year;
}

book.updateYear(2024);
console.log(book);

//Activity 03 

const library = {
    name: "City Library",
    books: [
        {
            title: "1969",
            author: "George Washington",
            year: 1949
        },
        {
            title: "New World",
            author: "Senku Chan",
            year: 1932
        }
    ]
};

console.log(library);

console.log(`Library Name: ${library.name}`);
library.books.forEach(book => {
    console.log(`Book Title: ${book.title}`);
});