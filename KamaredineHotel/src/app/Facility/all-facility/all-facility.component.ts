import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Facility } from '../../Shared/Facility';
import { FacilityService } from '../../Shared/facility.service';

@Component({
  selector: 'app-all-facility',
  templateUrl: './all-facility.component.html',
  styleUrls: ['./all-facility.component.css']
})
export class AllFacilityComponent implements OnInit {

  searchText: any;
  constructor(public service: FacilityService,
    private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {

    this.service.refreshList();
  }

  populateForm(selectedRecord: Facility) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
  OnEdit(id: number) {
    this.router.navigate(['/editFacility', id]);
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
