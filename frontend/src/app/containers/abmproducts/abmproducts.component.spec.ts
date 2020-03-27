import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmproductsComponent } from './abmproducts.component';

describe('AbmproductsComponent', () => {
  let component: AbmproductsComponent;
  let fixture: ComponentFixture<AbmproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbmproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
