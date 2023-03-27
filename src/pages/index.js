import { useState, useEffect } from "react";
import MarkersMap from "../components/MarkersMap";
import { markers } from "../data/coordinates";

export default function Home() {
  const [location, setLocation] = useState([-68.1193, -16.4897]);
  const [mapMarkers, setMapMarkers] = useState(markers);
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLocation([longitude, latitude]);
        setMapMarkers([...markers, { coordinates: location }]);
        console.log(mapMarkers);
      });
    }
  }, [mapMarkers]);
  return (
    <div>
      {mapMarkers ? <MarkersMap props={mapMarkers} /> : <>Loading...</>}
    </div>
  );
}
