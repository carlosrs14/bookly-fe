import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  reviews = [
    {
      title: 'El Señor de los Anillos',
      author: 'J.R.R. Tolkien',
      content: 'Una aventura épica llena de personajes inolvidables.'
    },
    {
      title: '1984',
      author: 'George Orwell',
      content: 'Un clásico de la distopía que te hace reflexionar.'
    }
  ];
}
