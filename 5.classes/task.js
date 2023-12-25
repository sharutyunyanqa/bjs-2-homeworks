// Задание 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
        if (this.state > 100) {
            this.state = 100;
        }
    }

    get state() {
        return this._state;
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

// Задание 2
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let book of this.books) {
            if (type === 'releaseDate' && book.releaseDate === value) return book;
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                const book = this.books[i];
                this.books.splice(i, 1);
                return book;
            }
        }
        return null;
    }
}

// Ваш код для тестирования
// ...



// const library = new Library("Центральная библиотека");

// const novel = new NovelBook("Война и мир", 1869, 1225, "Лев Толстой");
// const magazine = new Magazine("National Geographic", 2021, 120);
// library.addBook(novel);
// library.addBook(magazine);

// const book1919 = library.findBookBy('releaseDate', 1919);
// if (!book1919) {
//     const book1919New = new Book("Тайные учения всех времен", 1919, 350, "Автор неизвестен");
//     library.addBook(book1919New);
// }


// const borrowedBook = library.giveBookByName("Война и мир");
// borrowedBook.state = 10;  // Установка состояния в 10 (поврежденная книга)


// borrowedBook.fix();


// library.addBook(borrowedBook);

