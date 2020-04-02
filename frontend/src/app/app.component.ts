import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tienda';

  constructor(public userService: UserService) { }

  ngOnInit() {
    const token: string = localStorage.getItem('authToken');
    if (token) {
      this.userService.getInfo(token)
        .subscribe(
          (res: HttpResponse<object>) => this.userService.setUser(res),
          (error: HttpErrorResponse) => {
            console.error(error);
            localStorage.removeItem('authToken');
          }
        )
    }
  }
}
