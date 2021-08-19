import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent{
    titulo: string = 'Software Estrategico - Test ';
    
    constructor(private router : Router){}

    OnLogOut(){
        console.log("en OnLogOut");
        localStorage.removeItem('userToken');
        this.router.navigate(['/login']);
    }
}
