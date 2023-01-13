import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Facility } from './Facility';
import { HotelInfo } from './HotelInfo';

@Injectable({
  providedIn: 'root'
})
export class HotelInfoService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://localhost:7274/api/HotelInfo'
  formData: HotelInfo = new HotelInfo();
  list: HotelInfo[] = [];

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
      .then(res => this.list = res as HotelInfo[]);
  }
  getById(id: number) {
    return this.http.get(`${this.baseURL}/${id}`);
  }
}
