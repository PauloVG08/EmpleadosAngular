import { Injectable } from '@angular/core';
import { IEmpleado } from './interfaces/empleado';

@Injectable({
    providedIn: 'root'
})
export class EmpleadosService {

    private _empleados: IEmpleado[] = [];

    constructor() { 
        this._empleados = JSON.parse(localStorage.getItem('empleados') || '[]') as IEmpleado[];
    }

    get empleados(): IEmpleado[] {
        return this._empleados;
    }

    agregarEmpleado(empleado: IEmpleado) {
        this._empleados.push(empleado);
        localStorage.setItem('empleados', JSON.stringify(this._empleados));
    }

    async eliminarEmpleado(empleado: IEmpleado) {
        const confirmacion = await this.confirmacionAlert('¿Estás seguro de eliminar este empleado?');
        if (confirmacion) {
            const index = this._empleados.indexOf(empleado);
            this._empleados.splice(index, 1);
            localStorage.setItem('empleados', JSON.stringify(this._empleados));
        }
    }


    confirmacionAlert(message: string): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            const confirmacion = window.confirm(message);
            resolve(confirmacion);
        });
    }
}
