import { Injectable } from '@angular/core';
import {environment as env} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Supplier} from './model/Supplier';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierHttpService {

  private apiUrlS = env.apiUrl + 'suppliers';

  constructor(private http: HttpClient) { }

  add(supplier: Supplier): Observable<Supplier>{
    return this.http.post<Supplier>(this.apiUrlS, supplier);
  }

  delete(supplierId: number): Observable<any>{
    return this.http.delete(this.apiUrlS + '/' + supplierId);
  }

  update(supplier: Supplier): Observable<Supplier>{
    return this.http.put<Supplier>(this.apiUrlS + '/' + supplier.id, supplier);
  }

  findAll(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.apiUrlS);
  }

  findOne(id: number): Observable<Supplier> {
    return this.http.get<Supplier>(this.apiUrlS + '/' + id);
  }
}
