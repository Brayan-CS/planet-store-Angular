import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Planet } from '../planet.model';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
})
export class PlanetComponent {
  @Input() planet: Planet;
  @Output() planetClicked: EventEmitter<any> = new EventEmitter();

  addPlanet() {
    console.log('añadir planeta');
    this.planetClicked.emit(this.planet.id);
  }
}
