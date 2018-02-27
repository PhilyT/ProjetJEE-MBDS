import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutlibrairieComponent } from './ajoutlibrairie.component';

describe('AjoutlibrairieComponent', () => {
  let component: AjoutlibrairieComponent;
  let fixture: ComponentFixture<AjoutlibrairieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutlibrairieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutlibrairieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
