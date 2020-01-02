import {Component, HostListener, OnInit} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {AppList, User, UserInfo} from '../plain-object/user';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import Travel from '../services/travel';
import {NotificationService} from '../services/notification.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  public showNotificationIcon: boolean;
  public notificationCounter: number;
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
    public notificationService: NotificationService,
    public location: Location,
    public router: Router,
  ) {
    this.getUserInfo();
  }

  ngOnInit(): void {
    this.onResize(event);
    this.loadNotification();
  }

  getUserInfo() {
    this.authService.loggedInUserInfo().subscribe(data => {
      this.user = data;
      if (!this.user.permission.qms) {
        console.log('permission denied');
        document.location.href = Travel.swassertiveURL;
      } else {
        this.showNotificationIcon = this.user.permission.qms.qms_notification;
      }
    });
  }

  TravelAnother(url: string) {
    document.location.href = url;
  }

  getLogOut() {
    this.authService.logMeOut().subscribe(data => {
      if (data.status === 'success') {
        document.location.href = Travel.swassertiveURL;
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isHandset = window.innerWidth < 800;
  }

  loadNotification() {
    this.notificationService.getNotification().subscribe(data => {
      this.notificationService.nonZeroPriceEmergencyData(data).subscribe(dts => {
        this.notificationCounter = dts.length;
      });
    });
  }
}
