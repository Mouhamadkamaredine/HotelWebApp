import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Staffs } from './Staff.model';



@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://localhost:7274/api/Staff'
  formData: Staffs = new Staffs();
  list: Staffs[] = [];

  postPaymentDetail() {
    return this.http.post(this.baseURL, this.formData);
  }

  putPaymentDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.id}`, this.formData);
  }

  deletePaymentDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.list = res as Staffs[]);
  }

}
