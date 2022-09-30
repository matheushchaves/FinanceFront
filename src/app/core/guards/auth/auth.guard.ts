import { environment } from '../../../../environments/environment';
import { AccessService } from '../access/access.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private hash!: string;

  constructor(private router : Router, private authService : AuthService,     private accessService : AccessService  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(!environment.production) return true;

     this.setToken(state.root.fragment)

     if(this.accessService.hasToken()){
        return new Observable<boolean>((observer) => {
          this.accessService
            .validateToken()
            .toPromise()
            .then((data) => {
              observer.next(true)
              observer.complete()
            })
            .catch((error) => {
              this.accessService.deleteToken()
              this.loginRedirect(state)
              })
            });
      }else{
        return this.loginRedirect(state)
      }

  }

  private  setToken(hash : string | null){
    if(hash){
      this.accessService.saveToken(hash)
      window.location.hash = ''
    }
  }

  private loginRedirect(state : RouterStateSnapshot) : Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.authService
        .getURLLoginSAML()
        .toPromise()
        .then((data: any) => {
          window.location.href = `${data.url}?RelayState=${state.url}`;
        })
        .catch((error : any) => {
          this.router.navigateByUrl('access-denied');
          observer.next(false);
          observer.complete();
        });
    });
  }

}
