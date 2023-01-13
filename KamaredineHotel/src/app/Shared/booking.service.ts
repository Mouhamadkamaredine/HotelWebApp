import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Book } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://localhost:7274/api/Book'
  formData: Book = new Book();
  list: Book[] = [];

  postPaymentDetail() {
    return this.http.post(this.baseURL, this.formData);
  }

  putPaymentDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.bookingId}`, this.formData);
  }

  deletePaymentDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.list = res as Book[]);
  }
  checkAvailable(checkin: string, checkout: string) {
    return this.http.get(`${this.baseURL}/${checkin},${checkout}`);
  }
  getById(id: number) {
    return this.http.get(`${this.baseURL}/${id}`);
  }
}
