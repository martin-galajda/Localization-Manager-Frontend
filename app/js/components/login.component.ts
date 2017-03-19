/**
 * Created by martin on 12/4/16.
 */
import {Component, Injectable, trigger, state, transition, style, animate} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {AuthService} from "../services/auth.service";

@Component({
    selector: 'login',
    templateUrl: '../../view/login.component.html',
    styleUrls: ['../../styles/login.component.css'],
    animations: [
        trigger('animateOpacity', [
            state('fullOpacity', style({
                'opacity': '1'
            })),
            transition('void => *', [
                style({
                    'opacity': '0.3',
                }),
                animate('500ms 200ms linear')
            ]),
        ])
    ]
})

@Injectable()
export class LoginComponent
{
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private authService: AuthService
    )
    {

    }

    googleLogin() {
        this.authService.googleSignIn();
    }

    isLoggedUser: boolean = false;
}
