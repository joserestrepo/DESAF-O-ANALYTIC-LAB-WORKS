import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCommerceComponent } from './modal-commerce.component';

describe('ModalCommerceComponent', () => {
  let component: ModalCommerceComponent;
  let fixture: ComponentFixture<ModalCommerceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCommerceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
