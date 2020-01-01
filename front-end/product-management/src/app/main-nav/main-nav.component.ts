import {Component, HostListener, OnInit} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {AppList, User, UserInfo} from '../plain-object/user';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';
import {Travel} from '../service/travel';
import {NotificationService} from '../service/notification.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  public showNotificationIcon: boolean;
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
  public user: User = {
    user: this.userInfo,
    permission: '',
    primeAccess: '',
    appList: this.appList
  };
  isHandset: boolean;
  notificationCounter: number;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private notificationService: NotificationService,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    this.onResize(event);
    this.getUserInfo();
    this.loadNotification();
  }

  getUserInfo() {
    this.authService.loggedInUserInfo().subscribe(data => {
      this.user = data;
      this.showNotificationIcon = this.user.permission.pms.pms_notification;
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

  loadNotification() {
    this.notificationService.getNotification().subscribe(data => {
      this.notificationService.zeroPriceEmergencyData(data).subscribe(dts => {
        this.notificationCounter = dts.length;
      });
    });
  }
}
