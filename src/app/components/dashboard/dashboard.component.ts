import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/Models/users';
import { NetworkService } from 'src/app/Service/network.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userAll : Users[] | undefined;
  countUser : number | undefined;

  constructor(private networkService : NetworkService) { }

  ngOnInit(): void {
    this.feedUsers();
  }

  feedUsers()
  {
    this.networkService.getUsers().subscribe(
      data => {
        this.userAll = data.result;
        this.countUser = this.userAll.length;
      },
      error => {
        alert("Can't get users data");
      }
    );
  }

}
