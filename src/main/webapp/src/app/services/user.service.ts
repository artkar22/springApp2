/**
 * Created by B51-80 on 2017-02-21.
 */

import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Response, Http} from '@angular/http';
import {RegistrationData} from "../interfaces/registrationData.interface";
import 'rxjs/add/operator/map';
import {Consts} from "../consts/Consts";

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    //for a testing
    greetingServe() {
        return this.http.get(Consts.APP_PATH + '/greeting', this.jwt()).map((response: Response) => response.json());
    }

    getAll() {
        return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: RegistrationData) {
        return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
    }

    // update(user: User) {
    //     return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    // }

    // delete(id: number) {
    //     return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    // }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
