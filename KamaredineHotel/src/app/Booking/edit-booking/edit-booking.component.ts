import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { Book } from '../../Shared/booking.model';
import { BookingService } from '../../Shared/booking.service';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.css']
})
export class EditBookingComponent implements OnInit {
  id: any;
  categories$: any;
  constructor(public service: BookingService,
    private toastr: ToastrService, private router: Router, private route: ActivatedRoute) {
      this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.categories$ = this.service.refreshList();
      this.service.getById(this.id).pipe(take(1)).subscribe((prod: any) => {
        if (prod) {
          this.service.formData = prod;
        }
      });
    }}

  ngOnInit(): void {
    this.service.refreshList();
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.bookingId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted successfully', 'Booking Register')
      },
      err => { console.log(err); }
    );
  }
  updateRecord(form: NgForm) {
    this.service.putPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated successfully', 'Booking Register')
      },
      err => { console.log(err); }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Book();
  }
  populateForm(selectedRecord: Book) {
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
