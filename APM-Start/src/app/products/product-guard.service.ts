import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductGuardService implements CanActivate {
    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    //     throw new Error("Method not implemented.");
    // }

    constructor(private _router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = parseInt(route.url[1].path);
        if (isNaN(id) || id < 1) {
          alert("Invalid product id");
          this._router.navigate(['/products']);
          return false;
        }
        return true;
    }
}