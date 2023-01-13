import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCalendar, NgbDate, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { Subject, Subscription, take } from 'rxjs';
import { AddRoomServiceService } from '../../Shared/add-room-service.service';
import { AddRooms } from '../../Shared/add-room.model';
import { Book} from '../../Shared/booking.model';
import { BookingService } from '../../Shared/booking.service';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css'],

})
export class AddBookingComponent implements OnInit {
  checkin: string | any;
  checkout: string | any;
  categories$: any;
  product: any;
  subscribe: Subscription | any;
  dtTrigger: Subject<any> = new Subject<any>();


  constructor(public service: BookingService,
    private toastr: ToastrService,
    public service1: AddRoomServiceService, private router: Router, private route: ActivatedRoute, private http: HttpClient) {

    this.checkin = this.route.snapshot.paramMap.get('checkin');
    this.checkout = this.route.snapshot.paramMap.get('checkout');
    if (this.checkin, this.checkout) {
      this.categories$ = this.service.refreshList();
      
    }
  }

  ngOnInit(): void {
    this.service.refreshList();
    this.service1.refreshList();
    this.service.checkAvailable(this.checkin, this.checkout);
    
  }
  populateForm1(selectedRecord: AddRooms) {
    this.service1.formData = Object.assign({}, selectedRecord);
  }


  onSubmit(form: NgForm) {
    if (this.service.formData.bookingId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  checkAvailabel(checkin: string, checkout: string) {
    this.service.checkAvailable(checkin, checkout)

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
