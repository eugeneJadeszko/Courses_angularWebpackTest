import {Board} from "./board";
import {User} from "./user";

export class Book {
    constructor(public id: number, tittle: string, public author: string, public board: Board, public users: User[]) {
    }
}