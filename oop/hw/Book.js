

export default class Book {
    constructor(year) {
        this._year = year;
    }

    get year() {
        return this._year;
    }

    set year(year) {
        this._year = year;
    }

    static findOldest(books){
        const oldestBook = books.reduce((oldest, cur) => {
            return oldest.year < cur.year ? oldest : cur;
        })

        return oldestBook;

        // return books.reduce((oldest, cur) => {
        //     return oldest.year < cur.year ? oldest : cur;
        // })
    }
}