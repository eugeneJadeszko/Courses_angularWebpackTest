import Board from "./board";
import User from "./user";

/**
 * Book model
 */
export default class Book {
    constructor(public id: number, tittle: string, public author: string, public board: Board, public users: User[]) {
    }
}