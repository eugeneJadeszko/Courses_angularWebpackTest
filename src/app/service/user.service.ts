import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import IUserService from "./iuser.service";
import User from "../model/user";

const USER_ALL = '/jpa/user/all';

@Injectable()
export default class UserService implements IUserService {

    constructor(private http: Http) {
    }

    findAll(): Promise<User[]> {
        return this.http.get(USER_ALL)
            .toPromise()
            .then(response => response.json());
    }

    findByFirstName(name: string) {
        return this.http.get('http://localhost:8080/jpa/c/user/add/' + name);
    }
}