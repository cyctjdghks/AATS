import axios from "axios";
import { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const Main = () => {
  const [position, setPosition] = useState({
    lat: 36.10713422838027,
    lng: 128.41612352992854,
  });
  const [cctvLocation, setCctvLocation] = useState({});
  console.log(cctvLocation);

  const url = "https://j8d102.p.ssafy.io/be/board";
  const sendImg = (event) => {
    event.preventDefault();
    const formData = new FormData();
    const files = event.target.elements.files.files;
    console.log(files);
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    console.log(formData);
    axios
      .post(url, formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
      <div>
        <form onSubmit={sendImg}>
          <input type="file" name="files" multiple />
          <button type="submit">전송</button>
        </form>
      </div>
    </div>
  );
};

export default Main;
