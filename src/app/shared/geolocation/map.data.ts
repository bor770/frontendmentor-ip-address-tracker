import { Icon, icon, tileLayer } from 'leaflet';

export const iconData = {
  icon: icon({
    ...Icon.Default.prototype.options,
    iconAnchor: [23, 56],
    iconRetinaUrl: null,
    iconSize: [46, 56],
    iconUrl: `assets/images/icon-location.svg`,
    shadowUrl: null,
  }),
};

export const layers = [
  tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
    attribution: `&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>`,
    maxZoom: 18,
  }),
];

export const zoom = 5;
