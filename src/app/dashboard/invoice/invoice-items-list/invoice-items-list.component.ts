import {Component, OnInit, Input} from '@angular/core';
import {InvoiceProduct} from "../../../shared/services/data/invoice/invoiceProduct.model";

@Component({
  selector: 'invoice-items-list',
  templateUrl: 'invoice-items-list.component.html',
  styleUrls: ['invoice-items-list.component.scss']
})
export class InvoiceItemsListComponent implements OnInit {
  @Input() items: InvoiceProduct[];
  constructor() { }

  ngOnInit() {
  }

}
