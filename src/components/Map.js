import { GoogleMap, LoadScript , Marker} from '@react-google-maps/api'
import React from 'react'

const Map = () => {

    const mapStyles = {
        height: "50vh",
        width: "100%"
    };

    const defaultCenter = {
        lat: 19.6628881,// data.lat,
        lng: -99.1002375// data.lng,
    }

    return (
      <LoadScript googleMapsApiKey='AIzaSyCz0A_3MLTaqvVELt6Ep8T8K8uVml8uzIg'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={17}
          center={defaultCenter}
        >
          <Marker position={defaultCenter} />
        </GoogleMap>
      </LoadScript>
    )
}

export default Map
