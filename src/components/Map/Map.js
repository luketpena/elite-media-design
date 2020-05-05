import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 44.976040, lng: -93.272460 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 44.976040, lng: -93.272460 }} />}
  </GoogleMap>
))

export default Map;