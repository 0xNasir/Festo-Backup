import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactPerson} from '../../plain-object/contact-person';
import {CompanyService} from '../../service/company.service';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Location} from '@angular/common';
import {ContactDialogComponent} from '../../dialog/contact-dialog/contact-dialog.component';
import {AuthService} from '../../service/auth.service';

export interface Contact {
  personId: string;
  personName: string;
  personEmail: string;
  personNumber: string;
  personDesignation: string;
  branchName: string;
  companyName: string;
}

export interface Branch {
  branchId: string;
  branchName: string;
  branchAddress: string;
  companyName: string;
  contactInfo: ContactPerson[];
}

@Component({
  selector: 'app-browse-by-contact-branch',
  templateUrl: './browse-by-contact-branch.component.html',
  styleUrls: ['./browse-by-contact-branch.component.css']
})
export class BrowseByContactBranchComponent implements OnInit {
  permission: any;
  browseAs: string;
  branch: Branch[];
  contact: Contact[];
  branchDataSource: MatTableDataSource<Branch>;
  contactDataSource: MatTableDataSource<Contact>;
  branchColumns: string[] = ['branchId', 'branchName', 'branchAddress', 'companyName', 'contactInfo'];
  contactColumns: string[] = ['personId', 'personName', 'personEmail', 'personNumber', 'personDesignation', 'branchName', 'companyName'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  public isHandset: boolean;

  constructor(
    public router: Router,
    private activeRouter: ActivatedRoute,
    private companyService: CompanyService,
    public dialog: MatDialog,
    public location: Location
  ) {
    this.permission = AuthService.permission;
  }

  ngOnInit() {
    this.onResize(event);
    this.getData();
  }

  getData() {
    this.activeRouter.paramMap.subscribe(param => {
      this.browseAs = param.get('browseBy');

      if (this.browseAs.toString() === 'contact') {
        this.companyService.getByContact().subscribe(data => {
          this.contact = data;
          this.contactDataSource = new MatTableDataSource<Contact>(this.contact);
          this.contactDataSource.paginator = this.paginator;
          this.contactDataSource.sort = this.sort;
        });
      } else if (this.browseAs.toString() === 'branch') {
        this.companyService.getByBranch().subscribe(data => {
          this.branch = data;
          this.branchDataSource = new MatTableDataSource<Branch>(this.branch);
          this.branchDataSource.paginator = this.paginator;
          this.branchDataSource.sort = this.sort;
        });
      } else {
        this.router.navigate(['404']);
      }
    });
  }

  applyFilter(filterValue: string) {
    if (this.browseAs === 'contact') {
      this.contactDataSource.filter = filterValue.trim().toLowerCase();
      if (this.contactDataSource.paginator) {
        this.contactDataSource.paginator.firstPage();
      }
    } else {
      this.branchDataSource.filter = filterValue.trim().toLowerCase();
      if (this.branchDataSource.paginator) {
        this.branchDataSource.paginator.firstPage();
      }
    }
  }

  showContact(contactList: any) {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      width: '800px',
      data: contactList
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isHandset = window.innerWidth < 800;
  }
}
