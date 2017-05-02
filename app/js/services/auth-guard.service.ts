import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";

import 'rxjs/Rx';

import { Observable } from 'rxjs/Observable';
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";
import { GUEST } from '../Constants/UserRole';
/**
 * Created by martin on 12/4/16.
 */

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
        return this.authService.getLoggedUser().map(user => {
            if (!user.role || user.role === GUEST) {
                this.authService.redirectUrl = state.url;
                this.router.navigate(['/not-confirmed']);
                return false;
            }
            return true;
        }).catch(() => {
            this.authService.redirectUrl = state.url;
            this.router.navigate(['/login']);
            return Observable.of(false);
        });
    }
}