import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChooseRoom } from './add-rooNb.model';

@Injectable({
  providedIn: 'root'
})
export class AddRoomNbServiceService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://localhost:7274/api/RoomNumber/RetrieveRoomNb'
  readonly baseURL1 = 'https://localhost:7274/api/RoomNumber'
  readonly baseURL2 = 'https://localhost:7274/api/CreatingRoom'

  formData: ChooseRoom = new ChooseRoom();
  list: ChooseRoom[] = [];

  postPaymentDetail() {
    return this.http.post(this.baseURL1, this.formData);
  }

  putPaymentDetail() {
    return this.http.put(`${this.baseURL1}/${this.formData.id}`, this.formData);
  }

  deletePaymentDetail(id: number) {
    return this.http.delete(`${this.baseURL1}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.list = res as ChooseRoom[]);
  }
  getById(id: number) {
    return this.http.get(`${this.baseURL2}/${id}`);
  }
}
