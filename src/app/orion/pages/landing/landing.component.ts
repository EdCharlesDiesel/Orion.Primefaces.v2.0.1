import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {LayoutService} from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent {
  constructor(public layoutService: LayoutService, public router: Router) {
  }
  public login() {
    //this.router.navigate(['Authentication/login']).finally();
    this.router.navigateByUrl('Authentication/login');
  }
}
