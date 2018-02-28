import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifilibraryComponent } from './modifilibrary.component';

describe('ModifilibraryComponent', () => {
  let component: ModifilibraryComponent;
  let fixture: ComponentFixture<ModifilibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifilibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifilibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
