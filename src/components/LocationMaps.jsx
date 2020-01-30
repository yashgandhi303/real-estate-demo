import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const style = {
    width: "600px",
    height: "400px"
  };

const mapData = [
    {
      lng:-78.948237,
      lat:35.929673
    },
    {
      lng:-77.032000,
      lat:38.889510
    },
    {
      lng: -78.477510,
      lat:38.032120
    }, 
    {
      lng:-75.830290,
      lat: 36.379450
    }
]
// https://wrapapi.com/use/yash_dev/realtor/multi-polygon/0.0.1?wrapAPIKey=ZhfGYogqbo6UHnmisJHIafAhljXX3oj8
class LocationMaps extends Component {
    render() {
        const item = mapData[Math.floor(Math.random()*mapData.length)];
        console.log("ds", item);
        return (
            <Map
                google={this.props.google}
                style={style}
                initialCenter={{
                    lat: item.lat,
                    lng: item.lng
                }}
                zoom={15}
            >
                <Marker onClick={this.onMarkerClick} name={"Current location"} />
                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>selected location</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDd2SpJcGuRSwRTNZPXIW8lOxXn1bm7TWg"
})(LocationMaps);
