import { Component } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css'
})
export class BtnComponent {
  @Input() btn!:String;
  @Input() texto!:String;
}
