export interface Employee {
  _id: string;
  primerApellido: string;
  segundoAPellido: string;
  primerNombre: string;
  segundoNombre: string;
  paisEmpleo: string[];
  tipoIdentificacion: string[];
  numeroIdentificacion: string;
  email: string;
  fechaIngreso: Date;
  areaContratado:string[];
  estado: boolean;
  FechaRegistro: Date;
}

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
}

export interface CreateUserDTO extends Omit<User, 'id'> {}

export interface UpdateUserDTO extends Partial<CreateUserDTO>{}
