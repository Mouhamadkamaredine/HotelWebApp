import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Facility } from '../../Shared/Facility';
import { FacilityService } from '../../Shared/facility.service';

@Component({
  selector: 'app-addfacility',
  templateUrl: './addfacility.component.html',
  styleUrls: ['./addfacility.component.css']
})
export class AddfacilityComponent implements OnInit {

  constructor(public service: FacilityService,
    private toastr: ToastrService) { }

  ngOnInit(): void {

    this.service.refreshList();
  }

  populateForm(selectedRecord: Facility) {
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
