import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tienda';

  constructor(public userService: UserService) { }

  ngOnInit() {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.userService.getInfo(token)
      .subscribe(res =>{
          this.userService.setUser(res);
          this.userService.setToken(token);})
      ;
    }
  }
}
