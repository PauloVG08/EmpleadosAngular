import { Component } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { IEmpleado } from '../interfaces/empleado';

@Component({
    selector: 'app-forulario-empleados',
    templateUrl: './forulario-empleados.component.html',
    styleUrls: ['./forulario-empleados.component.css']
})
export class ForularioEmpleadosComponent {
    nuevoEmpleado: IEmpleado = {
        nombre: '',
        correo: '',
        telefono: '',
        sexo: '',
        fechaNacimiento: new Date(), // Inicializar como un objeto Date
    }

    constructor(private empleadosService: EmpleadosService) { }

    agregarEmpleado() {
        if(this.nuevoEmpleado.nombre.trim().length === 0) {
            console.log("error en nombre");
            return;
        }
        if(this.nuevoEmpleado.correo.trim().length === 0) {
            console.log("error en correo");
            return;
        }
        if(this.nuevoEmpleado.telefono.trim().length === 0) {
            console.log("error en telefono");
            return;
        }
        if(this.nuevoEmpleado.sexo.trim().length === 0) {
            console.log("error en sexo");
            return;
        }

        this.empleadosService.agregarEmpleado(this.nuevoEmpleado);
        this.nuevoEmpleado = {
            nombre: '',
            correo: '',
            telefono: '',
            sexo: '',
            fechaNacimiento: new Date(),
        }
    }
}
