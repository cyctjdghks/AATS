import UserDatas from "./components/UserData";
import { useSelector } from "react-redux";
import classes from "./Search.module.css"
import { useState } from "react";

import quote1 from "../../../assets/auths/quote1.png";
import quote2 from "../../../assets/auths/quote2.png";

import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  const userDatas = useSelector((state) => state.auth.users);
  
  // const top = {
  //   userId : '아이디',
  //   userName : '이름',
  //   userGender : '성별',
  //   userStatus : '상태',
  //   userEmail : '이메일'
  // }

  const [searchName, setSearchName] = useState("");
  let newData = []
  const createData = () =>{
    for (let value of userDatas.values() ){
      if (value.userName.includes(searchName)){
        newData.push(value)
      };
    }
  }
  createData();



  newData.sort(function (a, b) {
    if (a.userStatus < b.userStatus) {
      return 1;
    }
    if (a.userStatus > b.userStatus) {
      return -1;
    }
    return 0;
  });
  
  return (
    <div className={classes.dashboard}>
      <div className={classes.textBox}> 
        <img src={quote1} alt="따옴표1" className={classes.quote1} />
        <p className={classes.pageName1}>SEARCH</p>
        <p className={classes.pageName2}>AATS의 회원/근무자를 검색하세요</p>
        <img src={quote2} alt="따옴표1" className={classes.quote2} />
      </div>
      <div className={classes.hrLine}></div>
      <div className={classes.searchBar}>
      <input type="text" onChange={(event)=> setSearchName(event.target.value)} className={classes.serchInput}/>
      <div className={classes.searchIconBox}>
        <SearchIcon 
          className={classes.searchIcon}
          fontSize="large"
          sx={{ color: "white" }}
          />
      </div>
      </div>
      <div className={classes.peopleBox}>
      <div className={classes.userDataBox}>
      <div className={classes.idBox}>아이디</div>
      <div className={classes.nameBox}>이름</div>
      <div className={classes.genderBox}>성별</div>
      <div className={classes.statusBox}>상태</div>
      <div className={classes.emailBox}>이메일</div>
    </div>
      <hr className={classes.horizenHr}/>
      {newData.map((newData, idx) => (
        <UserDatas key={idx} userData={newData} />
      ))}
      </div>
    </div>
  );
};

export default Search;
