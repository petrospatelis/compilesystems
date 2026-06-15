/** Map center for 23 Dromos, Episkopi, Limassol (4620). */
export const companyMapLocation = {
  latitude: 34.6736017,
  longitude: 32.8987841,
  zoom: 17,
} as const;

export function getGoogleMapsSearchUrl() {
  const { latitude, longitude, zoom } = companyMapLocation;
  return `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}&zoom=${zoom}`;
}
