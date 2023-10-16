import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaActorComponent } from './busqueda-actor.component';

describe('BusquedaActorComponent', () => {
  let component: BusquedaActorComponent;
  let fixture: ComponentFixture<BusquedaActorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusquedaActorComponent]
    });
    fixture = TestBed.createComponent(BusquedaActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
