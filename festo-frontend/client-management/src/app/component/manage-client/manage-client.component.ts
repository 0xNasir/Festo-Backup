import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CompanyService} from '../../service/company.service';
import {Client} from '../../plain-object/client';
import {MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {Branch} from '../../plain-object/branch';
import {BranchDialogComponent} from '../../dialog/branch-dialog/branch-dialog.component';
import {Location} from '@angular/common';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-manage-client',
  templateUrl: './manage-client.component.html',
  styleUrls: ['./manage-client.component.css']
})
export class ManageClientComponent implements OnInit {
  permission: any;
  companyArray: Client[];
  browseAs: string;
  showBox: boolean;
  company: MatTableDataSource<Client>;
  displayedColumns: string[] = ['companyId', 'companyName', 'totalBranch', 'branch', 'action'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  public isHandset: boolean;

  constructor(
    public router: Router,
    private companyService: CompanyService,
    private activeRouter: ActivatedRoute,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    public location: Location
  ) {
    this.permission = AuthService.permission;
  }

  ngOnInit() {
    this.showBox = true;
    this.onResize(event);
    this.getCompany();
  }

  getCompany() {
    this.companyService.readCompany().subscribe(data => {
      this.companyArray = data;
      this.company = new MatTableDataSource(this.companyArray);
      this.company.paginator = this.paginator;
      this.company.sort = this.sort;
      this.company.filterPredicate = (datas, filter: string) => {
        const companyName = datas.companyName.toLowerCase().includes(filter);
        return (companyName);
      };
    });
  }

  applyFilter(filterValue: string) {
    this.company.filter = filterValue.trim().toLowerCase();
    if (this.company.paginator) {
      this.company.paginator.firstPage();
    }
  }

  deleteCompany(id: number) {
    if (confirm('Do you want to delete company?')) {
      this.companyService.deleteCompany(id).subscribe(data => {
        this.getCompany();
        this.snackBar.open(data['message'], 'Close', {
          duration: 2000,
        });
      });
    }
  }

  openBranchList(branches: Branch[]) {
    const dialogRef = this.dialog.open(BranchDialogComponent, {
      width: '800px',
      data: branches
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isHandset = window.innerWidth < 800;
  }

}
