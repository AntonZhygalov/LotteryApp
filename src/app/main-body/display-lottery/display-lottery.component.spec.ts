import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayLotteryComponent } from './display-lottery.component';

describe('DisplayLotteryComponent', () => {
  let component: DisplayLotteryComponent;
  let fixture: ComponentFixture<DisplayLotteryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayLotteryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayLotteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
