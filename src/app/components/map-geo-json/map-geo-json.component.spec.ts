import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapGeoJSONComponent } from './map-geo-json.component';

describe('MapGeoJSONComponent', () => {
  let component: MapGeoJSONComponent;
  let fixture: ComponentFixture<MapGeoJSONComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapGeoJSONComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapGeoJSONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
