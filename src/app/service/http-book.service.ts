import {Injectable} from "@angular/core";
import {Http} from '@angular/http';

@Injectable()
export class HttpBookService {

    constructor(private http: Http) {
    }

    findAll() {
        return this.http.get('http://localhost:8080/jpa/c/book/all');
    }
}