import {Component, OnInit} from '@angular/core';
import {Response} from '@angular/http';
import {HttpUserService} from "../service/http-user.service"
import {User} from "../model/user"

@Component({
    selector: 'user',
    templateUrl: '../templates/user.component.html'
})

export class UserComponent implements OnInit {

    users: User[] = [];

    constructor(private httpService: HttpUserService) {
    }

    ngOnInit(): void {
        this.httpService.findAll().subscribe((data: Response) => this.users = data.json());
    }
}