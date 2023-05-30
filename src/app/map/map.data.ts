import { Icon, icon } from 'leaflet';

export const iconData = {
  icon: icon({
    ...Icon.Default.prototype.options,
    iconAnchor: [23, 56],
    iconRetinaUrl: null,
    iconSize: [46, 56],
    iconUrl: 'assets/images/icon-location.svg',
    shadowUrl: null,
  }),
};
