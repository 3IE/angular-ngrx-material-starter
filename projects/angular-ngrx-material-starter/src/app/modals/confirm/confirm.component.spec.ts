import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideMockStore } from '@ngrx/store/testing';

import { ConfirmComponent } from './confirm.component';

describe('ConfirmComponent', () => {
  let component: ConfirmComponent;
  let fixture: ComponentFixture<ConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmComponent],
      providers: [
        provideMockStore(),
        NgbActiveModal
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
