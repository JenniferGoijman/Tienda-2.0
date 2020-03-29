import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {
  public users;
  constructor(public userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAll()
      .subscribe(res => { this.users = res; },
        error => console.error(error));
  }
  
  insertUser() {
    //ABRIR VENTANA PARA CREAR USUARIO
  }

  updateUser(userId) {
    console.log(userId);
    //ABRIR VENTANA PARA EDITAR USUARIO
  }
  deleteUser(userId) {
    console.log(userId);
    //ESTA SEGURO QUE DESEA ELIMINAR ESTE USUARIO?
  }
 
}
