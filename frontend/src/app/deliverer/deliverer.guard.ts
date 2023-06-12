import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class DelivererGuard implements CanActivate {
  router = inject(Router);
  deliverer = environment.deliverer;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let data = sessionStorage.getItem(this.deliverer);
    if (data != null && +data > 0)
      return true;
    else {
      this.router.navigateByUrl('main');
      return false;
    }
  }
  
}
