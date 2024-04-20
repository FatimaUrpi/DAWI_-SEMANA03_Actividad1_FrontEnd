import { Component } from '@angular/core';
import { AppMaterialModule } from '../../app.material.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaisService } from '../../services/pais.service';
import { FormsModule } from '@angular/forms';
import { EmpleadoService } from '../../services/empleado.service';
import { Pais } from '../../models/pais.model';
import { Empleado } from '../../models/empleado.model';
import Swal from 'sweetalert2'







@Component({
  selector: 'app-add-empleado',
  standalone: true,
  imports: [AppMaterialModule, FormsModule, CommonModule],
  templateUrl: './add-empleado.component.html',
  styleUrl: './add-empleado.component.css'
})
export class AddEmpleadoComponent {

  lstPais : Pais[] = [];

  objEmpleado : Empleado  ={
      nombres : "",
      apellidos : "",
      fechaNacimiento: new Date(), // Formatea la fecha en formato ISO 8601
      pais : {
          idPais : -1
      }
  }

  constructor(private paisService : PaisService, 
              private empleadoService:EmpleadoService){

          this.paisService.listaPais().subscribe(
                x => this.lstPais = x
          );
  }
  

  inserta(){

          this.empleadoService.registraEmpleado(this.objEmpleado).subscribe(
              x =>  Swal.fire({icon: 'info',title: 'Resultado del Registro - Fatima',text: x}) 
          );
  }

}