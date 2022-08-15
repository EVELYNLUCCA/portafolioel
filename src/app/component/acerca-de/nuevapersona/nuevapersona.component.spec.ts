import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevapersonaComponent } from './nuevapersona.component';

describe('NuevapersonaComponent', () => {
  let component: NuevapersonaComponent;
  let fixture: ComponentFixture<NuevapersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevapersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevapersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
