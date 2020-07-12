import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCommerceComponent } from './card-commerce.component';

describe('CardCommerceComponent', () => {
  let component: CardCommerceComponent;
  let fixture: ComponentFixture<CardCommerceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCommerceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
