import { useEffect, useMemo } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

// import icon from "./Icon";

function Markerposition({ address }) {
  const position = useMemo(() => {
    return [address.location.lat, address.location.lng];
  }, [address.location.lat, address.location.lng]);
  const map = useMap();

  useEffect(() => {
    map.flyTo(position, 13, {
      animate: true,
    });
  }, [map, position]);
  return (
    <>
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </>
  );
}

export default Markerposition;
