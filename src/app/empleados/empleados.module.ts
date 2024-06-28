import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { EmpleadosService } from './empleados.service';
import { ForularioEmpleadosComponent } from './forulario-empleados/forulario-empleados.component';
import { ListadoEmpleadosComponent } from './listado-empleados/listado-empleados.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        CabeceraComponent,
        ForularioEmpleadosComponent,
        ListadoEmpleadosComponent,
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        CabeceraComponent,
        ForularioEmpleadosComponent,
        ListadoEmpleadosComponent
    ],
    providers: [EmpleadosService],
})
export class EmpleadosModule { }
