import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class HttpBoardService {
    constructor(private http: Http) {
    }

    getAllBoard() {
        return this.http.get('http://localhost:8080/jpa/c/board/all');
    }

    addBoard(num: number) {
        return this.http.get('http://localhost:8080/jpa/c/board/add/' + num);
    }
}