import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  admins =['admin'];

  constructor(public userService:UserService) { }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.removeItem('authToken');
    this.userService['user'] = {};
  }


}
