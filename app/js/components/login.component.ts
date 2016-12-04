/**
 * Created by martin on 12/4/16.
 */
import {Component, Injectable} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {AuthService} from "../services/auth.service";
@Component({
    selector: 'login',
    templateUrl: 'app/view/login.component.html'
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
}
