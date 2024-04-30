import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavebarComponent } from './navebar/navebar.component';
import { HeaderComponent } from './header/header.component';
import { BodySuperiorComponent } from './body-superior/body-superior.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavebarComponent,HeaderComponent,BodySuperiorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'artigo';
}
