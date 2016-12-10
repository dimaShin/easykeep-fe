import {Component, OnInit, Input} from '@angular/core';
import {InvoiceItem} from "../../../shared/services/data/invoice/invoiceItem.model";

@Component({
  selector: 'invoice-items-list',
  templateUrl: 'invoice-items-list.component.html',
  styleUrls: ['invoice-items-list.component.scss']
})
export class InvoiceItemsListComponent implements OnInit {
  @Input() items: InvoiceItem[];
  constructor() { }

  ngOnInit() {
  }

}
