import {InvoiceItem} from "./invoiceItem.model";
export class Invoice {

  public id: string;
  public place: string;
  public items: InvoiceItem[];

  constructor(data) {
    Object.assign(this, {
      items: (data.items || []).map(item => new InvoiceItem(item))
    }, data);
  }

  get total() {
    return this.items.reduce((value: number, item: InvoiceItem) => {
      return value += item.cost;
    }, 0);
  }

}
