import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {ApiService} from "../../api/api.service";
import {Observable} from "rxjs";
import {Invoice} from "./invoice.model";
import {InvoiceProduct} from "./invoiceProduct.model";
@Injectable()
export default class InvoiceService implements Resolve<any> {

  constructor(
    private api: ApiService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any> {
    return Observable.of(new Invoice({id: (<any>route).params.invoiceId}));
  }

  getItem() : InvoiceProduct {
    return new InvoiceProduct({});
  }
}