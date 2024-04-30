import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { BtnComponent } from '../../btn/btn.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage,NgClass,BtnComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
        

}
