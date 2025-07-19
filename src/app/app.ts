import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

/* 
Un componente es un conjunto de HTML, CSS y JS 
*/
//Decorador
@Component({
  selector: 'app-root', //Es el nombre con el que despues podremos instanciar a nuestro componente
  standalone: true,
  imports: [RouterOutlet, RouterModule, MatToolbarModule, MatIconModule, MatButtonModule], //... Debemos indicar todas las importaciones que usara nuestro componente
  templateUrl: './app.html', //Direccion de donde estara el HTML de nuestro
  styleUrl: './app.css'
})
export class App {
  


}

//NOTA: App no es una clase generica de JS sino que es un Component de Angular, porque tiene el decorador @Component encima de su declaracion