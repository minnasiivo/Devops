import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';

import { HomeComponent } from './home.component';

//run test:
//ng test --include=src/app/home/home.component.spec.ts

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Home-Component', () => {
    expect(component).toBeTruthy();
  });

  it('button navigate to feedback page', () => {
    component.showFeedbackPage();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['feedback']);
    // component.showFeedbackPage();
    //expect(routerSpy.navigate).toHaveBeenCalledWith(['feedback']);
  });


});
