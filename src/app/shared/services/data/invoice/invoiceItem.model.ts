export class InvoiceItem {
  public id: string;
  public name: string;
  public price: number;
  public quantity: number;
  public cost: number;
  public measure: string = 'pcs';

  constructor(data) {
    Object.assign(this, data);
  }
}
