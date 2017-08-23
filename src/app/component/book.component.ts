import {Component, OnInit} from '@angular/core';
import {Response} from '@angular/http';
import {HttpBookService} from "../service/http-book.service"
import {Book} from "../model/book"

@Component({
    selector: 'book',
    templateUrl: '../templates/book.component.html'
})

export class BookComponent implements OnInit {

    books: Book[] = [];

    constructor(private httpService: HttpBookService) {
    }

    ngOnInit(): void {
        this.httpService.findAll().subscribe((data: Response) => this.books = data.json());
    }
}