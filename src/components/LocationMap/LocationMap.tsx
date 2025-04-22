import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { LatLngTuple } from "leaflet"; // Import specific types

// --- Icon Fix ---
// Import images directly. Vite should handle this.
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

// Type safety for the prototype is tricky. Using 'as any' is a common
// workaround if the direct mergeOptions below doesn't solve icon loading issues.
// Avoid deleting if possible, as the types don't expose '_getIconUrl'.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl; // Error 1 Fix (Workaround if needed)

// This mergeOptions approach is generally preferred and often works without the delete.
L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetinaUrl,
  iconUrl: iconUrl,
  shadowUrl: shadowUrl,
});
// --- End of Icon Fix ---

// --- Define an interface for the tile layer structure ---
interface TileLayerInfo {
  url: string;
  attribution: string;
  // If using Mapbox or similar requiring a token IN the URL template:
  // accessToken?: string; // Optional: Not directly used by <TileLayer> prop, but part of URL
}

// --- Define the available tile layers using the interface ---
// Using Record<string, TileLayerInfo> provides type checking for the keys and values
const tileLayers: Record<string, TileLayerInfo> = {
  osm: {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
  cartoPositron: {
    url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    attribution:
      '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>',
  },
  cartoDarkMatter: {
    url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    attribution:
      '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>',
  },
  stamenTonerLite: {
    url: "https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png",
    attribution:
      '© <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> © <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> © <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    // Example URL if API key needed:
    // url: 'https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png?api_key=YOUR_STADIA_API_KEY',
  },
  stamenTerrain: {
    url: "https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.png",
    attribution:
      '© <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> © <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> © <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    // Example URL if API key needed:
    // url: 'https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.png?api_key=YOUR_STADIA_API_KEY',
  },
  openTopoMap: {
    url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    attribution:
      'Map data: © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: © <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
  },
  esriWorldStreetMap: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
    attribution:
      "Tiles © Esri — Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012",
  },
  esriWorldImagery: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    attribution:
      "Tiles © Esri — Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
  },
  esriLightGray: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
    attribution: "Tiles © Esri — Esri, DeLorme, NAVTEQ",
  },
  // Example Mapbox: Replace YOUR_MAPBOX_ACCESS_TOKEN and Style ID as needed
  // mapboxStreets: {
  //   url: "https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=YOUR_MAPBOX_ACCESS_TOKEN",
  //   attribution: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a>',
  // },
};

// Use React.FC for functional component type definition
const LocationMap: React.FC = () => {
  // Error 2 & 3 Fix: Explicitly type position as LatLngTuple ([number, number])
  // LatLngTuple is assignable to LatLngExpression, resolving the type mismatch.
  const position: LatLngTuple = [52.0594, 1.1555]; // Ipswich, UK

  // --- Select the layer to display ---
  // Define the type for the key to ensure it exists in tileLayers
  const currentLayerKey: keyof typeof tileLayers = "esriWorldStreetMap"; // Change key here
  const currentLayer: TileLayerInfo = tileLayers[currentLayerKey];

  return (
    // Ensure container has height/width (e.g., via Tailwind classes)
    <div className="h-96 w-full md:h-[500px]">
      <MapContainer
        center={position} // Now accepts LatLngTuple correctly
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution={currentLayer.attribution}
          url={currentLayer.url}
          // Note: Access tokens (like for Mapbox) are usually part of the URL template itself.
          // react-leaflet's <TileLayer> doesn't have a separate accessToken prop.
        />
        <Marker position={position}>
          <Popup>Ipswich, UK.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationMap;
