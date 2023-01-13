import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { Facility } from '../../../Shared/Facility';
import { FacilityService } from '../../../Shared/facility.service';

@Component({
  selector: 'app-edit-facility-form',
  templateUrl: './edit-facility-form.component.html',
  styleUrls: ['./edit-facility-form.component.css']
})
export class EditFacilityFormComponent implements OnInit {

  id: any;
  categories$: any;
  imageURL: string | any;
  uploadForm: FormGroup | any;
  list: Facility[] = [];
  constructor(public service: FacilityService,
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
    this.service.formData = new Facility();
  }

}
