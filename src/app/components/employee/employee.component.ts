import { Component, OnInit } from '@angular/core';
import {Country, IdentificationType, WorkArea} from 'src/app/models/employee.model';
import {EmployeesService} from '../../services/employees.service'
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  public form : FormGroup;
  country: Country[] = [];
  workArea: WorkArea[] = [];
  identificationType: IdentificationType[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private employeesService: EmployeesService
  ) {
    this.form = this.formBuilder.group({
      id: new FormControl(),
      primerApellido: ['', [Validators.required]],
      segundoApellido: ['', [Validators.required]],
      primerNombre: ['', [Validators.required]],
      otrosNombres: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.employeesService.getCountry().subscribe(data => { this.country = data; });
    this.employeesService.getWorkArea().subscribe(data => { this.workArea = data; });
    this.employeesService.getIdentificationType().subscribe(data => { this.identificationType = data; });
  }
}
