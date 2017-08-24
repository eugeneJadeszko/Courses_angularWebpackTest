import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import IBoardService from "./iboard.service";
import Board from "../model/board";

const BOARD_ALL = '/jpa/c/board/all';
const BOARD_ADD = '/jpa/c/board/add/'

@Injectable()
export default class BoardService implements IBoardService {

    constructor(private http: Http) {
    }

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
}