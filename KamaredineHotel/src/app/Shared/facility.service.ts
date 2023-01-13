import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Facility } from './Facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://localhost:7274/api/Facility'
  formData: Facility = new Facility();
  list: Facility[] = [];

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
      .then(res => this.list = res as Facility[]);
  }
  getById(id: number) {
    return this.http.get(`${this.baseURL}/${id}`);
  }
}

