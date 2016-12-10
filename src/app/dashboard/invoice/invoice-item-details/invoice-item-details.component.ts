import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {InvoiceItem} from "../../../shared/services/data/invoice/invoiceItem.model";
import {MdDialog, MdDialogRef} from "@angular/material";
import {ConfirmComponent} from "../../../shared/components/confirm/confirm.component";
import {Subscription} from "rxjs";

@Component({
  selector: 'invoice-item-details',
  templateUrl: 'invoice-item-details.component.html',
  styleUrls: ['invoice-item-details.component.scss']
})
export class InvoiceItemDetailsComponent implements OnInit {

  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Input() product: InvoiceItem;

  private confirm: MdDialogRef<ConfirmComponent>;

  constructor(
    private dialog: MdDialog
  ) {
  }

  ngOnInit() {
  }

  get title() {
    return this.product && this.product.id ? 'Product Details' : 'Add Product';
  }

  onPriceChange(value : number) {
    let p = this.product;
    p.price = value;
    if (p.quantity) {
      p.cost = value * p.quantity;
    } else if (p.cost) {
      p.quantity = p.cost / value;
    }
  }

  onQChange(value: number) {
    let p = this.product;

    p.quantity = value;

    if (p.price) {
      p.cost = value * p.price;
    } else if (p.cost) {
      p.price = p.cost / value;
    }
  }

  onCostChange(value: number) {
    let p = this.product;

    p.cost = value;

    if (p.price) {
      p.quantity = value / p.price;
    } else if (p.quantity) {
      p.price = value / p.quantity;
    }
  }

  cancelClicked() {
    this.cancel.emit();
  }

  deleteClicked() {
    let subscription: Subscription = null;

    this.confirm = this.dialog.open(ConfirmComponent);

    subscription = this.confirm.afterClosed().subscribe(confirmed => {

      if (confirmed) {
        this.remove.emit();
      }

      this.confirm = null;

      subscription.unsubscribe();
    });

  }

}
