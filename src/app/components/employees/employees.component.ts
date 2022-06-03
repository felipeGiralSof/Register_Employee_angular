import { Component, OnInit } from '@angular/core';
import { User, CreateUserDTO, UpdateUserDTO,Employee } from 'src/app/models/employee.model';
import {EmployeesService} from '../../services/employees.service'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {

  users: Employee[] = [];
  displayedColumns: string[] = ['id', 'name', 'email', 'password', 'actions'];
  showUserDetail = false;
  userChosen: Employee =
  {
    _id : '',
    primerApellido: '',
    segundoAPellido: '',
    primerNombre: '',
    segundoNombre: '',
    paisEmpleo: [],
    tipoIdentificacion: [],
    numeroIdentificacion: '',
    email: '',
    fechaIngreso: new Date,
    areaContratado:[],
    estado: true,
    FechaRegistro: new Date
  };
  limit = 2;
  offset = 0;

  constructor(
    private employeesService: EmployeesService
    ) {
  }

  ngOnInit(): void {
    // this.employeesService.getProductsByPage(10, 0)
    // .subscribe(data => {
    //   this.users = data;
    // });
    this.loadMore();
  }

  toggleUserDetail(){
    this.showUserDetail = !this.showUserDetail;
  }

  // onShowDetail(id: string){
  //   this.employeesService.getUser(id)
  //   .subscribe(data => {
  //     //this.toggleUserDetail();
  //     this.userChosen = data;
  //   })
  // }

  // createNewUser(){
  //   const user: CreateUserDTO = {
  //     name: 'Nuevo nombre',
  //     email: 'felipe-giraldo@hotmail.es',
  //     password: '123456',
  //   }
  //   this.employeesService.create(user)
  //   .subscribe(data =>{
  //     console.log('created',data);
  //     this.users.unshift(data);
  //   });
  // }

  // updateUser(){
  //   const changes: UpdateUserDTO = {
  //     name: 'nuevo nombre',
  //   }
  //   const id = this.userChosen.id;
  //   this.employeesService.update(id, changes)
  //   .subscribe(data => {
  //     const productIndex = this.users.findIndex(item => item.id === this.userChosen.id);
  //     this.users[productIndex] = data;
  //     this.userChosen = data;
  //   });
  // }
  deleteUser(){
    const id = this.userChosen._id;
    this.employeesService.delete(id)
    .subscribe(() =>{
      const productIndex = this.users.findIndex(item => item._id === this.userChosen._id);
      this.users.splice(productIndex, 1);
      this.showUserDetail = false;
    })
   }
  loadMore(){
    this.employeesService.getProductsByPage(this.limit, this.offset)
    .subscribe(data => {
      this.users = this.users.concat(data);
      this.offset += this.limit;
    })
  }
}
