import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalLayoutsComponent } from './horizontal-layouts.component';

describe('HorizontalLayoutsComponent', () => {
  let component: HorizontalLayoutsComponent;
  let fixture: ComponentFixture<HorizontalLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalLayoutsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HorizontalLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
