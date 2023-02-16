import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KereskedesComponent } from './kereskedes.component';

describe('KereskedesComponent', () => {
  let component: KereskedesComponent;
  let fixture: ComponentFixture<KereskedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KereskedesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KereskedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
