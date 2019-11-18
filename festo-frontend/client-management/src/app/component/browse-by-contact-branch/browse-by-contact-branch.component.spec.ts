import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseByContactBranchComponent } from './browse-by-contact-branch.component';

describe('BrowseByContactBranchComponent', () => {
  let component: BrowseByContactBranchComponent;
  let fixture: ComponentFixture<BrowseByContactBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseByContactBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseByContactBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
