import { Routes } from '@angular/router';
import { AddModalidadComponent } from './components/add-modalidad/add-modalidad.component';
import { AddEmpleadoComponent } from './components/add-empleado/add-empleado.component';

export const routes: Routes = [
      {   path: "addModalidad", component: AddModalidadComponent  },
      {   path: "addEmpleado", component: AddEmpleadoComponent  }
];
