import { LatLng, TileLayer } from 'leaflet';

export type MapOptions = { center: LatLng; layers: TileLayer[]; zoom: number };
