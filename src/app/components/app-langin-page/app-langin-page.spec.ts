import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLanginPage } from './app-langin-page';

describe('AppLanginPage', () => {
  let component: AppLanginPage;
  let fixture: ComponentFixture<AppLanginPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppLanginPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppLanginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
