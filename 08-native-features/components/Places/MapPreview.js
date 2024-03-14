import MapView, { Marker } from 'react-native-maps';

function MapPreview({ styles, region, onPress, selectedLocation }) {
  return (
    <MapView
      style={styles}
      initialRegion={region}
      onPress={onPress}
    >
      {selectedLocation && (
        <Marker
          title="Picked Location"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
}

export default MapPreview;
