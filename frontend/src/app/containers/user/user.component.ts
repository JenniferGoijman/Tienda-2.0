import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public message: string;
  public errorMsg: string;
  public loading:boolean=false;
  constructor(public userService: UserService, public router: Router) { }

  ngOnInit(): void {
  }

  register(event) {
    event.preventDefault();
    const form = event.target;
    const user = {
      email: form.email.value,
      username: form.username.value,
      password: form.password.value,
    }
    this.userService.signup(user)
      .subscribe(
        res => {
          console.log(res);
          this.message = res.message;
          setTimeout(() => this.message = "", 2500);
        },
        err => console.error(err)
      )
    event.target.reset();
  }

  login(event) {
    event.preventDefault();
    const form = event.target;
    const user = {
      username: form.username.value,
      password: form.password.value,
    }
    this.loading=true;
    this.userService.login(user)
    .subscribe(
        res => {
          this.message = res.message;
          this.loading=false;
          setTimeout(() => this.message = "", 2500);
          const redirectRoute = res.user.role==='admin' ? '/admin' : '/products';
          this.userService.setUser(res.user);
          this.userService.setToken(res.token);
          localStorage.setItem('authToken', res['token']);
          setTimeout(()=> { this.router.navigate([redirectRoute])})
        },
        err => {
          this.errorMsg = err.error.message
          this.loading=false;
          setTimeout(() => this.errorMsg = "", 2500);
        }
      )
  }
}
