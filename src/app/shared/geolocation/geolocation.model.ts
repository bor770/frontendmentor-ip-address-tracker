export type GeolocationData = {
  isp: string;
  location: {
    city: string;
    lat: number;
    lng: number;
    postalCode: string;
    region: string;
    timezone: string;
  };
};
