import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddRoomServiceService } from '../../Shared/add-room-service.service';
import { AddRooms } from '../../Shared/add-room.model';


@Component({
  selector: 'app-all-rooms',
  templateUrl: './all-rooms.component.html',
  styleUrls: ['./all-rooms.component.css']
})
export class AllRoomsComponent implements OnInit {
  searchText: any;
  constructor(public service: AddRoomServiceService,
    private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {

    this.service.refreshList();
  }

  populateForm(selectedRecord:AddRooms) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
  OnEdit(id:number) {
    this.router.navigate(['/editRooms', id]);
  }
  OnAddNb(id: number) {
    this.router.navigate(['/addRoomNb', id]);
  }
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deletePaymentDetail(id)
        .subscribe(
          res => {
            this.service.refreshList();
            this.toastr.error("Deleted successfully", 'Payment Detail Register');
          },
          err => { console.log(err) }
        )
    }
  }

}

