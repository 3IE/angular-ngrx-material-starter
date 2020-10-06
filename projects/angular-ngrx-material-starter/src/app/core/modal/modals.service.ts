import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {

  private ngbModal: NgbModal;

    constructor(
        ngbModal: NgbModal
    ) {
        this.ngbModal = ngbModal;
    }

    public open(content, options = {}) {
        return this.ngbModal.open(content, { backdrop: 'static', centered: true, ...options });
    }
}
