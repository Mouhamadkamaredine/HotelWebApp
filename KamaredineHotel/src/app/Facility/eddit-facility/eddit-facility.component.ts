import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Facility } from '../../Shared/Facility';
import { FacilityService } from '../../Shared/facility.service';

@Component({
  selector: 'app-eddit-facility',
  templateUrl: './eddit-facility.component.html',
  styleUrls: ['./eddit-facility.component.css']
})
export class EdditFacilityComponent implements OnInit {

  constructor(public service:FacilityService,
    private toastr: ToastrService) { }

  ngOnInit(): void {

    this.service.refreshList();
  }
  onSubmit(form: NgForm) {
    if (this.service.formData.id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted successfully', 'Payment Detail Register')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated successfully', 'Payment Detail Register')
      },
      err => { console.log(err); }
    );
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Facility();
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
