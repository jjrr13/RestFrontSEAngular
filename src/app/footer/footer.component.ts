import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    message: string = 'Test SE Angular - JJ';
    autor: any = {nombre: 'J. Jonatan', apellidos: 'Rojas R.'};

}
