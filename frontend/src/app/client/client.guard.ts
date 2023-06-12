import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate {
  router = inject(Router);
  client = environment.client;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let data = sessionStorage.getItem(this.client);
    if (data != null && +data > 0)
      return true;
    else {
      this.router.navigateByUrl('main');
      return false;
    }
  }
}
