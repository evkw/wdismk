import { Component, OnInit, AfterViewInit, HostListener, ViewChild } from '@angular/core';
import { MapComponent as MapBoxGlComponent } from 'ngx-mapbox-gl';
 
@Component({
  selector: 'mb-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {

  public earthquakes;

  @ViewChild(MapBoxGlComponent, {static: false}) map !: MapBoxGlComponent; 
  bounds = [[108.7113985960633, -8.913213718852916], [159.6663758846791, -29.329593228400185]];


  constructor() { }

  ngOnInit() {

     this.earthquakes = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            name: 'Corpus Christi Catholic School'
          },
          geometry: {
            type: "point",
            coordinates: [147.371473, -42.871256]
          }
        }
      ]
    }

  }

  @HostListener('mousemove', ['$event'])
  mouseEnter(mousemove: MouseEvent) {
    
  }

  ngAfterViewInit() {
  }

  onMouseMove(e) {
  }

}

