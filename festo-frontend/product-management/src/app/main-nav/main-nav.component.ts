import {Component, HostListener, OnInit} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {AppList, User, UserInfo} from '../plain-object/user';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';
import {Travel} from '../service/travel';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  userInfo: UserInfo = {
    fullName: '',
    userId: '',
    username: '',
    HTTP_USER_AGENT: ''
  };
  appList: AppList[] = [{
    appId: null,
    appName: '',
    url: '',
    sessAryName: '',
    remark: '',
    disabled: null
  }];
  user: User = {
    user: this.userInfo,
    permission: '',
    primeAccess: '',
    appList: this.appList
  };
  isHandset: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    public router: Router
  ) {
    this.getUserInfo();
  }

  ngOnInit(): void {
    this.onResize(event);
  }

  getUserInfo() {
    this.authService.loggedInUserInfo().subscribe(data => {
      this.user = data;
      if (!this.user.permission.pms) {
        document.location.href = Travel.authURL;
      }
    });
  }

  TravelAnother(url: string) {
    document.location.href = url;
  }

  getLogOut() {
    this.authService.logMeOut().subscribe(data => {
      if (data['status'] === 'success') {
        document.location.href = Travel.authURL;
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isHandset = window.innerWidth < 800;
  }
}
