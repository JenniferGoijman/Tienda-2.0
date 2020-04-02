import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon'
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  admins = ['admin'];
  //  matBadge = this.cartService.productsInCart;

  constructor(public userService: UserService, public cartService:CartService) { }

  ngOnInit(): void {
  }
  ngDoCheck(){console.log(this.cartService.productsInCart)}

  logOut() {
    localStorage.removeItem('authToken');
    this.userService['user'] = {};
  }
}
