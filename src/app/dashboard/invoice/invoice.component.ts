import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Invoice} from "../../shared/services/data/invoice/invoice.model";
import InvoiceService from "../../shared/services/data/invoice/invoice.service";
import {InvoiceProduct} from "../../shared/services/data/invoice/invoiceProduct.model";

@Component({
  selector: 'app-invoice',
  templateUrl: 'invoice.component.html',
  styleUrls: ['invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  public invoice: Invoice;
  public selectedProduct: InvoiceProduct = null;

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
    this.selectedProduct = this.invoiceService.getItem();
  }

  onCancelDetails() {
    this.selectedProduct = null;
  }

  onRemoveProduct(product: InvoiceProduct) {

  }

  onSaveProduct(product: InvoiceProduct) {
    this.invoice.products.push(product);
    this.selectedProduct = null;
  }

}
