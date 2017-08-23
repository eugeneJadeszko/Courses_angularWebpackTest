import {Component, OnInit} from '@angular/core';
import {Response} from '@angular/http';
import {HttpBoardService} from "../service/http-board.service"
import {Board} from "../model/board"

@Component({
    selector: 'board',
    templateUrl: '../templates/board.component.html'
})

export class BoardComponent implements OnInit {

    boards: Board[] = [];

    constructor(private httpService: HttpBoardService) {
    }

    addBoard(num: number) {
        this.httpService.addBoard(num).subscribe((data: Response) => console.log(data.json()));
    }

    ngOnInit(): void {
        this.httpService.getAllBoard().subscribe((data: Response) => this.boards = data.json());
    }
}