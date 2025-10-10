import Book from "./Book.js";
import EBook from "./EBook.js";


const harryPotter = new Book(1973)
const book2 = new Book(1971)
const ebook1 = new Book(1996)

const oldest = Book.findOldest([harryPotter, book2, ebook1])
console.log(oldest)


const eHarryPotter = EBook.fromBook(harryPotter, "PDF")
console.log(eHarryPotter)