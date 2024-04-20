
import { Pais } from "./pais.model";

export class Empleado {

    idEmpleado ?:number;
    nombres?:string;
    apellidos?:string;
    fechaNacimiento ?:Date;
    estado?:number;
    fechaRegistro?:Date;
    fechaActualizacion?:Date;
    pais?:Pais;

}
