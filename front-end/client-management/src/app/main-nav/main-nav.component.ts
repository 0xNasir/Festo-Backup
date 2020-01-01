import {Component, HostListener, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Router} from '@angular/router';
import {AppList, User, UserInfo} from '../plain-object/user';
import {AuthService} from '../service/auth.service';
import {Location} from '@angular/common';
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
  private permission: any;

  constructor(
    private breakpointObserver: BreakpointObserver,
    public router: Router,
    private authService: AuthService,
    private location: Location,
  ) {
  }


  ngOnInit(): void {
    this.onResize(event);
    this.getUserInfo();
  }

  getUserInfo() {
    this.authService.loggedInUserInfo().subscribe(data => {
      this.user = data;
      if (!this.user.permission.cms) {
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
