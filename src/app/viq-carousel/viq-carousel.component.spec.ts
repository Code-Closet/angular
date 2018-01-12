import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViqCarouselComponent } from './viq-carousel.component';

describe('ViqCarouselComponent', () => {
  let component: ViqCarouselComponent;
  let fixture: ComponentFixture<ViqCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViqCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViqCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
