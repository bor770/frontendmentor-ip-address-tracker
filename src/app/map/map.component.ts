import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { Icon, icon, latLng, marker, tileLayer } from 'leaflet';

@Component({
  imports: [CommonModule, LeafletModule],
  selector: 'app-map',
  standalone: true,
  styleUrls: ['./map.component.css'],
  templateUrl: './map.component.html',
})
export class MapComponent {
  marker = marker;
  lat = 46.879966;
  lng = -121.726909;
  icon = {
    icon: icon({
      ...Icon.Default.prototype.options,
      iconAnchor: [23, 56],
      iconRetinaUrl: null,
      iconSize: [46, 56],
      iconUrl: 'assets/images/icon-location.svg',
      shadowUrl: null,
    }),
  };
  // layers = [
  //   marker([46.879966, -121.726909], {
  //     icon: icon({
  //       ...Icon.Default.prototype.options,
  //       iconAnchor: [23, 56],
  //       iconRetinaUrl: null,
  //       iconSize: [46, 56],
  //       iconUrl: 'assets/images/icon-location.svg',
  //       shadowUrl: null,
  //     }),
  //   }),
  // ];
  latLng = latLng;
  layers = [
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }),
  ];
  // options = {
  //   center: latLng(46.879966, -121.726909),
  //   layers: [
  //     tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //       attribution:
  //         '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  //       maxZoom: 18,
  //     }),
  //   ],
  //   zoom: 5,
  // };
}
