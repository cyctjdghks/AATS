import UserDatas from "./components/UserData";
import { useSelector } from "react-redux";
import classes from "./Search.module.css"
import { useState } from "react";

const Search = () => {
  const userDatas = useSelector((state) => state.auth.users);
  
  const top = {
    userId : '아이디',
    userName : '이름',
    userGender : '성별',
    userStatus : '상태',
    userEmail : '이메일'
  }

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
      <div className={classes.searchBar}>
        <h1>검색</h1>
        <input type="text" onChange={(event)=> setSearchName(event.target.value)}/>
      </div>
      <UserDatas userData={top}/>
      <hr className={classes.horizenHr}/>
      {newData.map((newData, idx) => (
        <UserDatas key={idx} userData={newData} />
      ))}
    </div>
  );
};

export default Search;
