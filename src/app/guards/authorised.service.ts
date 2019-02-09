import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const user = this.authService.isLoggedUser;
    console.log(user);
    // navigate to not found page
    if (user === null) {
      return true;
    } else if (typeof user === 'undefined') {
      console.log('here');
      return true;
    } else if (user) {
      this.router.navigate(['/']);
      return false;
    }
  }
}
