import UserDatas from "./components/UserData";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Search.module.css";
import { useEffect, useState } from "react";
import { authActions } from "../../../store/auth";

import quote1 from "../../../assets/auths/quote1.png";
import quote2 from "../../../assets/auths/quote2.png";

import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

const Search = () => {
  const dispatch = useDispatch();
  const organizationName = useSelector(
    (state) => state.auth.organizationData.organizationName
  );
  const workerDatas = useSelector((state) => state.auth.workers);
  const userDatas = useSelector((state) => state.auth.users);
  const [type, setType] = useState(0);

  const typeChange = (event) => {
    event.preventDefault();
    setType(!type);
  };
  
  const [searchName, setSearchName] = useState("");
  const [data, setData] = useState([])
  let newData = [];

  const createData = () => {
    setData(type ? userDatas : workerDatas)
    if (data !== []) {
      for (let value of data.values()) {
        if (value.userName.includes(searchName)) {
          newData.push(value);
        }
      }
    }else{
    }
  };
  

  newData.sort(function (a, b) {
    if (a.userStatus < b.userStatus) {
      return 1;
    }
    if (a.userStatus > b.userStatus) {
      return -1;
    }
    return 0;
  });
  const getDatas = () => {
    const workerUrl = "https://j8d102.p.ssafy.io/be/worker/all";
    axios
      .get(workerUrl)
      .then((response) => {
        dispatch(authActions.getWorkers(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
    const userUrl = "https://j8d102.p.ssafy.io/be/user/all";
    axios
      .get(userUrl)
      .then((response) => {
        dispatch(authActions.getUsers(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getDatas();
    createData();
  });

  return (
    <div className={classes.dashboard}>
      <div className={classes.textBox}>
        <img src={quote1} alt="따옴표1" className={classes.quote1} />
        <p className={classes.pageName1}>SEARCH</p>
        <p className={classes.pageName2}>
          {organizationName}의 {type ? "유저" : "근무자"}를 검색하세요
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
        <button onClick={typeChange}>{type ? "유저" : "근무자"}</button>
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
          <UserDatas key={idx} userData={newData} />
        ))}
      </div>
    </div>
  );
};

export default Search;
