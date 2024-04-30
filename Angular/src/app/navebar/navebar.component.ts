import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-navebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navebar.component.html',
  styleUrl: './navebar.component.css'
})
export class NavebarComponent {
  menu=["Para você","Para empresas","ARIA","Institucional"];
  @Input() fonte:String="hanken-grotesk";


}
