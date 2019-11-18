import {Component} from '@angular/core';
import {AuthService} from './service/auth.service';
import {Travel} from './service/travel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product-management';
  private user: any;
  constructor(
    private authService: AuthService
  ) {
    this.getUserInfo();
  }
  getUserInfo() {
    this.authService.loggedInUserInfo().subscribe(data => {
      this.user = data;
      if (!this.user.permission.pms) {
        document.location.href = Travel.authURL;
      }
    });
  }
}
