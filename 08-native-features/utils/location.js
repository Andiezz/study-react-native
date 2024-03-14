const GOOGLE_API_KEY = 'AIzaSyBY9kDDI5_pB1dvjt8WzJsgCXZdlSCNr5I';

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}&signature=chubbyPie`;
  return imagePreviewUrl;
}
