import Book from "../model/book";

/**
 * Service for book
 */
interface IBookService {
    /**
     * Load all books
     * @returns {Promise<Book[]>}
     * @see Book
     */
    findAll(): Promise<Book[]>;
}

export default IBookService;