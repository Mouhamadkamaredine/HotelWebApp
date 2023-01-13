import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from '../../Shared/booking.model';
import { BookingService } from '../../Shared/booking.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-booking',
  templateUrl: './all-booking.component.html',
  styleUrls: ['./all-booking.component.css']
})
export class AllBookingComponent implements OnDestroy ,OnInit {
  searchText:any;
  dtOptions: DataTables.Settings = {};
  product:Book[] = [];
  subscribe: Subscription | any;
  filtredproduct: any = [];
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(public service: BookingService,
    private toastr: ToastrService, private http: HttpClient, private router: Router) {
    this.subscribe =  this.http.get('https://localhost:7274/api/Book')
      .subscribe((product:any) => {
        this.filtredproduct = this.product = product;
        this.dtTrigger.next;
      });

  }
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  ngOnInit(): void {

    this.service.refreshList();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  


  }
  OnEdit(id: number) {
    this.router.navigate(['/editBooking', id]);
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
  filter(querystring: string) {
    if (querystring) {
      this.filtredproduct = this.product.filter((p: any) =>
        p.payload.val().title.toLowerCase().includes(querystring.toLowerCase()))
    }
    else { this.filtredproduct = this.product; }
  }
}
