import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLibrairyComponent } from './detail-librairy.component';

describe('DetailLibrairyComponent', () => {
  let component: DetailLibrairyComponent;
  let fixture: ComponentFixture<DetailLibrairyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailLibrairyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLibrairyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
