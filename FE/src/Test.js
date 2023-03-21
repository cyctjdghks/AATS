import { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const Main = () => {
  const [position, setPosition] = useState({
    lat: 36.10713422838027,
    lng: 128.41612352992854,
  });
  const [cctvLocation, setCctvLocation] = useState({});

  const [cctvName, setCctvName] = useState("");
  const [organizationId, setOrganizationId] = useState("");

  
  const axioData = {
    cctvLat: cctvLocation.lat,
    cctvLng: cctvLocation.lng,
    cctvInformation: cctvName,
    organizationId: organizationId,
  };
  console.log(axioData);

  return (
    <div>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 36.10713422838027,
          lng: 128.41612352992854,
        }}
        style={{
          width: "450px",
          height: "450px",
        }}
        level={4} // 지도의 확대 레벨
        onClick={(_t, mouseEvent) => {
          setPosition({
            lat: mouseEvent.latLng.getLat(),
            lng: mouseEvent.latLng.getLng(),
          });
          setCctvLocation({
            lat: mouseEvent.latLng.getLat(),
            lng: mouseEvent.latLng.getLng(),
          });
        }}
      >
        {position && <MapMarker position={position} />}
      </Map>
      {position && (
        <p>{"위도 : " + position.lat + " / 경도 : " + position.lng}</p>
      )}
    </div>
  );
};

export default Main;
