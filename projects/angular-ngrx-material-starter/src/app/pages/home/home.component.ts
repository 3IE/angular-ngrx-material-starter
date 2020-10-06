import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ModalService } from '../../core/modal/modal.service';
import { ConfirmComponent } from '../../modals/confirm/confirm.component';

@Component({
  selector: 'anms-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    //
  }

  public openModal(): void {
    const modal = this.modalService.open(ConfirmComponent);
    modal.componentInstance.title = 'Need confirmation';
    modal.componentInstance.message = 'Are you sure ?';
  }
}
