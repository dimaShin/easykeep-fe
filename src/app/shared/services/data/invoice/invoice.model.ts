import {InvoiceProduct} from "./invoiceProduct.model";
export class Invoice {

  public id?: string;
  public place: string;
  public products: InvoiceProduct[];

  constructor(data) {
    Object.assign(this, {
      products: (data.items || []).map(item => new InvoiceProduct(item))
    }, data);
  }

  get total() {
    return this.products.reduce((value: number, item: InvoiceProduct) => {
      return value += item.cost;
    }, 0);
  }

}
