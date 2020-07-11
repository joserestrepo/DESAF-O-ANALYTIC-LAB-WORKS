import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphPolarAreaComponent } from './graph-polar-area.component';

describe('GraphPolarAreaComponent', () => {
  let component: GraphPolarAreaComponent;
  let fixture: ComponentFixture<GraphPolarAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphPolarAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphPolarAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
