import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVehichlesComponent } from './view-vehichles.component';

describe('ViewVehichlesComponent', () => {
  let component: ViewVehichlesComponent;
  let fixture: ComponentFixture<ViewVehichlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewVehichlesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewVehichlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
