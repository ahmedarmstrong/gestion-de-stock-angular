import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauFrsComponent } from './nouveau-frs.component';

describe('NouveauFrsComponent', () => {
  let component: NouveauFrsComponent;
  let fixture: ComponentFixture<NouveauFrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauFrsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouveauFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
