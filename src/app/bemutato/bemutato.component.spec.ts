import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BemutatoComponent } from './bemutato.component';

describe('BemutatoComponent', () => {
  let component: BemutatoComponent;
  let fixture: ComponentFixture<BemutatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BemutatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BemutatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
