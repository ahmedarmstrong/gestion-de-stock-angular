import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleCategoriesComponent } from './nouvelle-categories.component';

describe('NouvelleCategoriesComponent', () => {
  let component: NouvelleCategoriesComponent;
  let fixture: ComponentFixture<NouvelleCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelleCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
