import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AddRoomServiceService } from '../../../Shared/add-room-service.service';
import { AddRooms } from '../../../Shared/add-room.model';

@Component({
  selector: 'app-add-rooms-form',
  templateUrl: './add-rooms-form.component.html',
  styleUrls: ['./add-rooms-form.component.css']
})
export class AddRoomsFormComponent implements OnInit {
  imageURL: string | any;
  uploadForm: FormGroup | any;
  constructor(public service: AddRoomServiceService,
    private toastr: ToastrService,
    public fb: FormBuilder) {
      this.uploadForm = this.fb.group({
        avatar: [null],
        name: ['']
      })
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
