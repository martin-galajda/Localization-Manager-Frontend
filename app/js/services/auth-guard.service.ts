import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";
/**
 * Created by martin on 12/4/16.
 */

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
        return this.authService.isAuthenticated().map(isAuthenticated => {
            if (!isAuthenticated) {
                this.authService.redirectUrl = state.url;
                this.router.navigate(['/login']);
                return false;
            }
            return true;
        });
    }
}