import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";

import 'rxjs/Rx';

import { Observable } from 'rxjs/Observable';
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";
import * as UserRole from "../Constants/UserRole";

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
        return this.authService.getLoggedUser().map(user => {
            console.log(user);
            if (!user || user.role !== UserRole.ADMIN) {
                this.authService.redirectUrl = state.url;
                this.router.navigate(['/project-list']);
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