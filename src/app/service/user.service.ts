import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import IUserService from "./iuser.service";
import User from "../model/user";

const USER_ALL = '/jpa/user/all';
const USER_CREATE = '/jpa/user/add';
const USER_DEL_BY_ID = '/jpa/user/del/';

@Injectable()
export default class UserService implements IUserService {

    constructor(private http: Http) {
    }

    user: User;

    findAll(): Promise<User[]> {
        return this.http.get(USER_ALL)
            .toPromise()
            .then(response => response.json());
    }

    createUser(name: string): Promise<User> {
        this.user = new User();
        this.user.name = name;
        return this.http.post(USER_CREATE, this.user)
            .toPromise()
            .then(response => response.json());
    }

    deleteById(id: number): Promise<User> {
        return this.http.get(USER_DEL_BY_ID + id)
            .toPromise()
            .then(response => response.json());
    }
}