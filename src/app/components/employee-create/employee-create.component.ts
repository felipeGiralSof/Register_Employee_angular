import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {EmployeesService} from '../../services/employees.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent  {
  public form : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private employeesService: EmployeesService,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      primerApellido: ['', [Validators.required]],
      segundoApellido: ['', [Validators.required]],
      primerNombre: ['', [Validators.required]],
      otrosNombres: ['', [Validators.required]],
    });
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const user = this.form.value;
      this.employeesService.create(user)
      .subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['./admin/products']);
      });
    }
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      primerApellido: ['', [Validators.required]],
      segundoApellido: ['', [Validators.required]],
      primerNombre: ['', [Validators.required]],
      otrosNombres: ['', [Validators.required]],
    });
  }
}

