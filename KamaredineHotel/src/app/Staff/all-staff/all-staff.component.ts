import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Staffs } from '../../Shared/Staff.model';
import { StaffService } from '../../Shared/Staff.service';

@Component({
  selector: 'app-all-staff',
  templateUrl: './all-staff.component.html',
  styleUrls: ['./all-staff.component.css']
})
export class AllStaffComponent implements OnInit {
  searchText: any;
  constructor(public service: StaffService,
    private toastr: ToastrService) { }

  ngOnInit(): void {

    this.service.refreshList();
  }

  populateForm(selectedRecord: Staffs) {
    this.service.formData = Object.assign({}, selectedRecord);
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
