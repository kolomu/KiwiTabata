import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { TrainingService } from "../training.service";
import { Injectable } from "@angular/core";

@Injectable()
export class TrainingGuard implements CanActivate {

    constructor(private ts: TrainingService, private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.ts.isCountdownFinished) {
            this.router.navigate(['/']);
        } else {
            return this.ts.isCountdownFinished;
        }
    }
}