import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class HttpUserService {
    constructor(private http: Http) {
    }

    findAll() {
        return this.http.get('http://localhost:8080/jpa/c/user/all');
    }

    findByFirstName(name: string) {
        return this.http.get('http://localhost:8080/jpa/c/user/add/' + name);
    }
}