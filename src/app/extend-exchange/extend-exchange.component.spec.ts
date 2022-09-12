import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendExchangeComponent } from './extend-exchange.component';

describe('ExtendExchangeComponent', () => {
  let component: ExtendExchangeComponent;
  let fixture: ComponentFixture<ExtendExchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendExchangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtendExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
