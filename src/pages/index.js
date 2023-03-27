import { useState, useEffect } from "react";
import MarkersMap from "../components/MarkersMap";

export default function Home() {
  const [location, setLocation] = useState([-68.1193, -16.4897]);
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLocation([longitude, latitude]);
      });
    }
  }, []);
  return (
    <div>
      <MarkersMap coordinates={location} />
    </div>
  );
}
