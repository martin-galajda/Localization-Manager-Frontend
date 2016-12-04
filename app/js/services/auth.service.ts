/**
 * Created by martin on 12/4/16.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AppConfig } from '../Constants/AppConfig';

import 'rxjs/Rx';

import { Observable } from 'rxjs/Observable';
import { User } from "../model/entity/User";

@Injectable()
export class AuthService {
    constructor(private http: Http) { }

    getLoggedUser(): Observable<User> {
        if (this.isInitialized) {
            return new Observable<User>((observer) => {
                observer.next(this.loggedUser);
                observer.complete();
            });
        }

        return this.http.get(AppConfig.GET_LOGGED_USER_URL)
            .map(this.extractData)
            .catch(this.handleError);
    }

    isAuthenticated(): Observable<boolean> {
        return this.getLoggedUser().map(user => {
            return user !== null;
        });
    }

    googleSignIn() {
        return this.http.get(AppConfig.GOOGLE_SIGN_IN_URL).map(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);

            return Observable.throw('fail');
        });
    }

    private extractData(res: Response) {
        this.loggedUser = res.json();
        this.isInitialized = true;
        return this.loggedUser;
    }

    private handleError(response: any) {
        this.loggedUser = null;
        this.isInitialized = true;

        console.log('error', response);

        return Observable.throw('not authenticated');
    }

    private isInitialized: boolean;
    private loggedUser: User;

    redirectUrl: string;
}
