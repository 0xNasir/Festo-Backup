import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Travel} from '../../static/travel';
import {AuthService} from '../../service/auth.service';
import {Menu} from '../../plain-object/menu';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {
  public username: any;
  public showSearch = false;
  appName = Travel.appName;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  public drawerMenuItems = [
    {name: 'Dashboard', state: '/dashboard', icon: 'home'},
    {name: 'My Activity', state: '/my-activity', icon: 'assignment_turned_in'}
  ];
  public appList: Menu[];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private authService: AuthService
  ) {
    this.getUserInfo();
  }

  getUserInfo() {
    this.authService.getUserInfo().subscribe(data => {
      this.username = data.user.username;
      this.appList = data.appList;
      if (data.permission.wp.wp_all) {
        this.drawerMenuItems.push({name: 'View All', state: '/work/all', icon: 'done_all'});
      }
    });
  }

  getLogOut() {
    this.authService.logMeOut().subscribe(data => {
      document.location.href = Travel.swassertiveURL;
    });
  }

  TravelAnother(url: string) {
    document.location.href = url;
  }
}
