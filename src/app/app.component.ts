import { Component } from '@angular/core';

import { Planet } from './planet.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'store';
  licores = ['Vodka', 'ginebra', 'tequila', 'cerveza'];

  planets: Planet[] = [
    {
      id: '1',
      image: 'assets/images/mercurio.png',
      planet: 'Mercurio',
      ano: 115.88,
      dia: 58.7,
    },
    {
      id: '2',
      image: 'assets/images/venus.png',
      planet: 'Venus',
      ano: 224.7,
      dia: 243.018,
    },
    {
      id: '3',
      image: 'assets/images/tierra.png',
      planet: 'Tierra',
      ano: 36.256,
      dia: 0.9972,
    },
    {
      id: '4',
      image: 'assets/images/marte.png',
      planet: 'Marte',
      ano: 686.971,
      dia: 24.62,
    },
    {
      id: '5',
      image: 'assets/images/jupiter.png',
      planet: 'Jupiter',
      ano: 398.9,
      dia: 9.9,
    },
    {
      id: '6',
      image: 'assets/images/saturno.png',
      planet: 'Saturno',
      ano: 378.1,
      dia: 10.5,
    },
    {
      id: '7',
      image: 'assets/images/urano.png',
      planet: 'Urano',
      ano: 30799.095,
      dia: 17.3,
    },
    {
      id: '8',
      image: 'assets/images/neptuno.png',
      planet: 'Neptuno',
      ano: 60190,
      dia: 16.06,
    },
  ];

  addItem() {
    this.licores.push('nuevo item');
  }

  deleteItem(index: number) {
    this.licores.splice(index, 1);
  }

  clickPlanet(id: number) {
    console.log('planet');
    console.log(id);
  }
}
