import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'anms-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmComponent {
  @Input() public title: string;
  @Input() public message: string;

  private activeModal: NgbActiveModal;

  constructor(activeModal: NgbActiveModal) {
    this.activeModal = activeModal;
  }

  public dismiss(): void {
    this.activeModal.dismiss(false);
  }

  public send(): void {
    this.activeModal.close(true);
  }
}
