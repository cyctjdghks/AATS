import axios from "axios";
import { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import classes from "./Test.module.css";

const Main = () => {
  const [position, setPosition] = useState({
    lat: 36.10713422838027,
    lng: 128.41612352992854,
  });
  const [cctvLocation, setCctvLocation] = useState({});

  const url2 = "http://192.168.100.81:8082/be/image";
  const url = "https://j8d102.p.ssafy.io/be/image";
  const sendImg = (event) => {
    event.preventDefault();
    const formData = new FormData();
    const files = event.target.elements.files.files;
    const user = {
      userId: "ssafy",
      userPwd: "1234qwer!",
    };
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    const userBlob = new Blob([JSON.stringify(user)], {
      type: "application/json",
    });
    formData.append("user", userBlob, "user.json");
    for (let value of formData.values()) {
      console.log(value);
    }
    axios
      .post(url2, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const urltmp = "http://127.0.0.1:5000";
  const [filename, setFileName] = useState("")
  const saveImg = (event) => {
    event.preventDefault();
    const formData = new FormData();
    const files = event.target.elements.files.files;
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    for (let value of formData.values()) {
      console.log(value);
      setFileName(value.name)
    }
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
      <div>
        <button
          onClick={() => {
            window.open(urltmp);
          }}
        >
          {" "}
          CCTV{" "}
        </button>
      </div>

      <div className={classes.filebox}>
        <form onSubmit={sendImg}>
          <label htmlFor="file">파일찾기</label>
          <input type="file" id="file" name="files" multiple />
          <input className={classes.uploadName} placeholder="선택된 파일 없음" defaultValue={filename} disabled={true}/>
          <button type="submit"> 저장</button>
        </form>
      </div>
    </div>
  );
};

export default Main;
