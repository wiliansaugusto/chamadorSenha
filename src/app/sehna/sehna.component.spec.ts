import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SehnaComponent } from './sehna.component';

describe('SehnaComponent', () => {
  let component: SehnaComponent;
  let fixture: ComponentFixture<SehnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SehnaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SehnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
