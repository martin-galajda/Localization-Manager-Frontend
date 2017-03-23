import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { AppConfig } from '../Constants/AppConfig';

import 'rxjs/Rx';

import { Observable } from 'rxjs/Observable';
import { User } from "../model/entity/User";

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getUsers(): Observable<User[]> {
        return this.http.get(AppConfig.USER_API_ENDPOINT)
            .map(this.extractData)
            .catch(this.handleError);
    }

    updateUser(userId: string, isAssignable: boolean): Observable<User> {

        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post(AppConfig.USER_API_ENDPOINT + "/" + userId, {
                isAssignable: isAssignable
            }, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    updateUserRole(userId: string, userRole: string): Observable<User> {

        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.put(AppConfig.USER_API_ENDPOINT + "/" + userId + "/role", {
                role: userRole
            }, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError(response: any) {
        console.log('error', response);

        return Observable.throw('error');
    }
}
