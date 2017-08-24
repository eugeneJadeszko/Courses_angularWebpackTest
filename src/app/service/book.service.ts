import {Injectable} from "@angular/core";
import Book from "../model/book";
import IBookService from "./ibook.service";
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

const BOOK_ALL = '/jpa/c/book/all';

@Injectable()
export default class BookService implements IBookService {
    constructor(private  http: Http) {

    }

    findAll(): Promise<Book[]> {
        return this.http.get(BOOK_ALL)
            .toPromise()
            .then(response => response.json());
    }
}