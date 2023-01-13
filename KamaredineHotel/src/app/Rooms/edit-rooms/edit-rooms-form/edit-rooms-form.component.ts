import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddRoomServiceService } from '../../../Shared/add-room-service.service';
import {AddRooms } from '../../../Shared/add-room.model';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-edit-rooms-form',
  templateUrl: './edit-rooms-form.component.html',
  styleUrls: ['./edit-rooms-form.component.css']
})
export class EditRoomsFormComponent implements OnInit {
  id: any;
  categories$: any;
  imageURL: string | any;
  uploadForm: FormGroup | any;
  list: AddRooms[] = [];
  constructor(public service: AddRoomServiceService,
    private toastr: ToastrService,
    public fb: FormBuilder,
    private router: Router, private route: ActivatedRoute

  ) {
    this.uploadForm = this.fb.group({
      avatar: [null],
      name: ['']
    })
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.categories$ = this.service.refreshList();
      this.service.getById(this.id).pipe(take(1)).subscribe((prod: any) => {
        if (prod) {
          this.service.formData = prod;
        }
      });
    }

   
    
  }

  showPreview(event: any) {
    const file = (event.target as HTMLInputElement | any).files[0];
    this.uploadForm.patchValue({
      avatar: file
    });
    this.uploadForm.get('avatar').updateValueAndValidity()
    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  ngOnInit(): void {
    
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
    this.service.formData = new AddRooms();
  }

} 
