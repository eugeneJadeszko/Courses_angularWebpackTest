import Board from "../model/board";

/**
 * Service for board
 */
interface IBoardService {
    /**
     * Load all boards
     * @returns {Promise<Board[]>}
     * @see Board
     */
    findAll(): Promise<Board[]>;

    /**
     * Adds new board into database
     * @param {number} num - number of board
     * @returns {Promise<Board>}
     * @see Board
     */
    addBoard(num: number): Promise<Board>;
}

export default IBoardService;