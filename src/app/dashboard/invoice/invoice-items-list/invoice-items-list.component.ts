import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Invoice} from "../../../shared/services/data/invoice/invoice.model";

@Component({
  selector: 'invoice-items-list',
  templateUrl: 'invoice-items-list.component.html',
  styleUrls: ['invoice-items-list.component.scss']
})
export class InvoiceItemsListComponent implements OnInit {

  @Input() invoice: Invoice;

  @Output() add: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  addProductClicked() {
    this.add.emit();
  }

}
