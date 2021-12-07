import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseFeaturesComponent } from './showcase-features.component';

describe('ShowcaseFeaturesComponent', () => {
  let component: ShowcaseFeaturesComponent;
  let fixture: ComponentFixture<ShowcaseFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowcaseFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
