import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FeedbackComponent } from './feedback.component';

//run test:
//ng test --include=src/app/feedback/feedback.component.spec.ts

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;
  let cancelSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedbackComponent],
      providers: [
        { provide: Router, useValue: cancelSpy }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Feedback-Component', () => {
    expect(component).toBeTruthy();
  });

  it('huomauttaa, jos nimi on liian lyhyt', () => {
    const name = component.fbForm.get('name');
    name?.setValue('a');
    fixture.detectChanges();
    expect(name?.valid).toBeFalsy();
  });

  it('huomauttaa, jos nimi puuttuu kokonaan', () => {

    const ctrl = component.fbForm.get('name');
    ctrl?.setValue('');
    fixture.detectChanges();
    expect(ctrl?.valid).toBeFalsy();
  });

  it("hyväksyy testi sähköpostin", () => {
    const ctrl = component.fbForm.get('email');
    ctrl?.setValue('testi.testi@mail.com');
    fixture.detectChanges();
    expect(ctrl?.valid).toBeTruthy();
  });

  it("puhelinnumero on liian lyhyt", () => {
    const ctrl = component.fbForm.get('phone');
    ctrl?.setValue('000000000');
    fixture.detectChanges();
    expect(ctrl?.valid).toBeFalsy();
  });

  it("cancel button navigates to homepage", () => {
    component.cancel();
    expect(cancelSpy.navigate).toHaveBeenCalledWith(['home']);
  })

});
