import {Component, OnInit, Input, EventEmitter, Output, ViewChild} from '@angular/core';
import {InvoiceProduct} from "../../../shared/services/data/invoice/invoiceProduct.model";
import {MdDialog, MdDialogRef} from "@angular/material";
import {ConfirmComponent} from "../../../shared/components/confirm/confirm.component";
import {NgForm, FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'invoice-item-details',
  templateUrl: 'invoice-item-details.component.html',
  styleUrls: ['invoice-item-details.component.scss']
})
export class InvoiceItemDetailsComponent implements OnInit {

  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Output() save  : EventEmitter<any> = new EventEmitter();

  @Input() product: InvoiceProduct;

  @ViewChild('form') ngForm: NgForm;

  constructor(
    private dialog: MdDialog
  ) {
  }

  ngOnInit() {console.log(this.ngForm) }

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
    let form: FormGroup = this.ngForm.form;
    if (form.pristine) {
      this.cancel.emit();
      return;
    }

    this.doConfirm()
      .then(confirmed => {
        if (confirmed) {
          this.cancel.emit();
        }
      });
  }

  deleteClicked() {
    this.doConfirm()
      .then((confirmed: boolean) => {
        if (confirmed) {
          this.remove.emit(this.product);
        }
      });
  }

  doConfirm(): Promise<boolean> {
    let c:MdDialogRef<ConfirmComponent> = this.dialog.open(ConfirmComponent);
    return c.afterClosed().toPromise();
  }

  submitClicked($event: Event) {
    let form : FormGroup = this.ngForm.form;
    $event.stopPropagation();
    $event.preventDefault();

    if (form.invalid) {
      return this.markAllFieldsAsDirty(form);
    }

    this.save.emit(this.product);
  }

  showHint(control: FormControl) : boolean {
    return control && control.dirty && control.invalid;
  }

  private markAllFieldsAsDirty(form: FormGroup): void {
    for(let key in form.controls) {
      let c = form.controls[key];
      c.markAsDirty();
    }
  }

}
