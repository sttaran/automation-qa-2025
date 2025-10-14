import Book from './Book.js';

export default class EBook extends Book {
  constructor(year, format) {
    super(year);
    this._format = format;
  }

  static fromBook(book, fileFormat) {
    return new EBook(book.year, fileFormat);
  }
}
