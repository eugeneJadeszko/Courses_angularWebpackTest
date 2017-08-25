import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import IBoardService from "./iboard.service";
import Board from "../model/board";

const BOARD_ALL = '/jpa/board/all';
const BOARD_ADD = '/jpa/board/add/';
const BOARD_CREATE = '/jpa/board/add';

@Injectable()
export default class BoardService implements IBoardService {

    constructor(private http: Http) {
    }

    board: Board;

    findAll(): Promise<Board[]> {
        return this.http.get(BOARD_ALL)
            .toPromise()
            .then(response => response.json());
    }

    addBoard(num: number): Promise<Board> {
        return this.http.get(BOARD_ADD + num)
            .toPromise()
            .then(response => response.json());
    }

    createBoard(numberOfBoard: number): Promise<Board> {
        this.board = new Board();
        this.board.number = numberOfBoard;
        return this.http.post(BOARD_CREATE, this.board)
            .toPromise()
            .then(response => response.json());
    }
}