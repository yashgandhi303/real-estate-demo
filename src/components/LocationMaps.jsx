import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const style = {
  width: "40%",
  height: "100%"
};
class LocationMaps extends Component {
  render() {
    const { lat, lng } = this.props;
    console.log("ds", lat);
    return (
      // <Map initialCenter={{ lat, lng }}
      //     google={this.props.google}
      //     zoom={14}>
      <Map
        google={this.props.google}
        style={style}
        initialCenter={{
          lat: "22.9952",
          lng: "72.6041"
        }}
        zoom={15}
        // onClick={this.onMapClicked}
      >
        <Marker onClick={this.onMarkerClick} name={"Current location"} />
        <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDd2SpJcGuRSwRTNZPXIW8lOxXn1bm7TWg"
})(LocationMaps);
