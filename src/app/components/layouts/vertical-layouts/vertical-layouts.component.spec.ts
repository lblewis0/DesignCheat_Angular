import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalLayoutsComponent } from './vertical-layouts.component';

describe('VerticalLayoutsComponent', () => {
  let component: VerticalLayoutsComponent;
  let fixture: ComponentFixture<VerticalLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticalLayoutsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerticalLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
