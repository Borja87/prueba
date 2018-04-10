import {Component} from '@angular/core';

@Component ({
    selector: 'app-fechactual',
    templateUrl: './fechaactual.component.html',
    styleUrls: ['./fechaactual.component.css']
})

export class FechaactualComponent {
    hoy = new Date();
    ciudad: string = 'Madrid';
    resultado: number = 1.148;
    precio: number = 0.88;
    nombre: string = 'Laura';
    sexo: string = 'mujer';
    encabezamiento: any = { 'hombre':'Estimado', 'mujer':'Estimada'};
}
