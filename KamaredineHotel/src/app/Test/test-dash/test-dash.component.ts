import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../Shared/user.service';

@Component({
  selector: 'app-test-dash',
  templateUrl: './test-dash.component.html',
  styleUrls: ['./test-dash.component.css']
})
export class TestDashComponent implements OnInit {
  userDetails: any;
  constructor(private router: Router, private service: UserService) { }

  ngOnInit(): void {
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log(err);
      },
    );

  }

}
