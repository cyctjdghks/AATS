import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import UserDatas from "./components/UserData";
import { authActions } from "../../../store/auth"

import SearchIcon from "@mui/icons-material/Search";

import quote1 from "../../../assets/auths/quote1.png";
import quote2 from "../../../assets/auths/quote2.png";

import classes from "./Search.module.css";

const Search = () => {
  const dispatch = useDispatch();
  const organizationName = useSelector(
    (state) => state.auth.organizationData.organizationName
  );
  const organizationId = useSelector((state) => state.auth.id)
  const workerDatas = useSelector((state) => state.auth.workers);
  const userDatas = useSelector((state) => state.auth.users);
  const [type, setType] = useState(1);

  const typeChange = (event) => {
    event.preventDefault();
    setType(!type);
    const workerUrl = "https://j8d102.p.ssafy.io/be/organization/getall/worker";
    const userUrl = "https://j8d102.p.ssafy.io/be/organization/getall/user";
    axios
      .post(workerUrl, { organizationId: organizationId })
      .then((response) => {
        dispatch(authActions.getWorkers(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .post(userUrl, { organizationId: organizationId })
      .then((response) => {
        dispatch(authActions.getUsers(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [searchName, setSearchName] = useState("");

  const data = type ? userDatas : workerDatas;

  const createData = () => {
    let tmpData = [];
    for (let value of data.values()) {
      const str = type ? value.userName || "" : value.workerName || "";
      if (str.includes(searchName)) {
        tmpData.push(value);
      }
    }
    return tmpData;
  };

  const newData = createData();

  newData.sort(function (a, b) {
    if (type ? a.userStatus < b.userStatus : a.workerStatus < b.workerStatus) {
      return 1;
    }
    if (type ? a.userStatus > b.userStatus : a.workerStatus > b.workerStatus) {
      return -1;
    }
    return 0;
  });

  return (
    <div className={classes.dashboard}>
      <div className={classes.textBox}>
        <img src={quote1} alt="따옴표1" className={classes.quote1} />
        <p className={classes.pageName1}>SEARCH</p>
        <p className={classes.pageName2}>
          {organizationName}의 {type ? "회원" : "근무자"}를 검색하세요
        </p>
        <img src={quote2} alt="따옴표1" className={classes.quote2} />
      </div>
      <div className={classes.hrLine}></div>
      <div className={classes.searchBar}>
        <input
          type="text"
          onChange={(event) => setSearchName(event.target.value)}
          className={classes.serchInput}
        />
        <div className={classes.searchIconBox}>
          <SearchIcon
            className={classes.searchIcon}
            fontSize="large"
            sx={{ color: "white" }}
          />
        </div>
      </div>
      <div>
        <button onClick={typeChange} className={classes.typebtn}>
          {type ? "회원" : "근무자"}
        </button>
      </div>
      <div className={classes.peopleBox}>
        <div className={classes.userDataBox}>
          <div className={classes.idBox}>아이디</div>
          <div className={classes.nameBox}>이름</div>
          <div className={classes.genderBox}>성별</div>
          <div className={classes.statusBox}>상태</div>
          <div className={classes.emailBox}>이메일</div>
        </div>
        <hr className={classes.horizenHr} />
        {newData.map((newData, idx) => (
          <UserDatas key={idx} data={newData} type={type} />
        ))}
      </div>
    </div>
  );
};

export default Search;
