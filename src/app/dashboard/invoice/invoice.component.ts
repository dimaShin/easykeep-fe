import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Invoice} from "../../shared/services/data/invoice/invoice.model";
import InvoiceService from "../../shared/services/data/invoice/invoice.service";
import {InvoiceItem} from "../../shared/services/data/invoice/invoiceItem.model";

@Component({
  selector: 'app-invoice',
  templateUrl: 'invoice.component.html',
  styleUrls: ['invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  public invoice: Invoice;
  public selectedItem: InvoiceItem = null;

  constructor(
    private route:ActivatedRoute,
    private invoiceService: InvoiceService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(resolve => {
      this.invoice = (<any>resolve).invoice;
    });
  }

  get title() {

    return this.invoice.id ? 'Invoice Details' : 'Create Invoice';
  }

  addProductClicked() : void {
    this.selectedItem = this.invoiceService.getItem();
  }

  onCancelDetails() {
    this.selectedItem = null;
  }

  onRemoveProduct() {

  }

}
