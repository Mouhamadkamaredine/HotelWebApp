import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddRooms } from './add-room.model';

@Injectable({
  providedIn: 'root'
})
export class AddRoomServiceService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://localhost:7274/api/CreatingRoom'
  formData: AddRooms = new AddRooms();
  list: AddRooms[] =[];
   
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
      .then(res => this.list = res as AddRooms[]);
  }
  getById(id: number) {
    return this.http.get(`${this.baseURL}/${id}`);
  }
}

