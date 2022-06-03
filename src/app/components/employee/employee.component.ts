import { Component, Input, Output,EventEmitter } from '@angular/core';
import {  User, Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent  {

  @Input() employee: Employee = {
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
  // @Input() employee: User = {
  //   id: '',
  //   email: '',
  //   password: '',
  //   name: '',
  // };
  constructor() { }

  @Output() showEmployee = new EventEmitter<string>();

  onShowDetailEmployee(){
    this.showEmployee.emit(this.employee._id);
  }
}
