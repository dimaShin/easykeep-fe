export class InvoiceProduct {
  public id?: string;
  public name: string;
  public price: number;
  public quantity: number;
  public cost: number;
  public measure: string = 'pcs';

  constructor(data) {
    Object.assign(this, data);
  }

  get quantityDisplay() {
    return `${this.quantity}${this.measure}`;
  }

  get priceDisplay() {
    return `${this.price}₴`
  }

  get costDisplay() {
    return `${this.price}₴`
  }
}
