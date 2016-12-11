import {InvoiceProduct} from "./invoiceProduct.model";
export class Invoice {

  public id?: string;
  public place: string;
  public products: InvoiceProduct[];

  constructor(data) {
    Object.assign(this, {
      products: (data.products || [
        {
          name: 'bananas',
          quantity: 2,
          measure: 'kg',
          price: 30,
          cost: 60
        },
        {
          name: 'beaf',
          quantity: 1.5,
          measure: 'kg',
          price: 89,
          cost: 89 + 44.5
        }
      ]).map(item => new InvoiceProduct(item))
    }, data);
  }

  get total() {
    return this.products.reduce((value: number, item: InvoiceProduct) => {
      return value += item.cost;
    }, 0);
  }

  get totalDisplay() {
    return `${this.total}₴`;
  }

}
