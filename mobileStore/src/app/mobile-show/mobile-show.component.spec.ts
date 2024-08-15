import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileShowComponent } from './mobile-show.component';

describe('MobileShowComponent', () => {
  let component: MobileShowComponent;
  let fixture: ComponentFixture<MobileShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MobileShowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
