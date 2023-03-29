import UserDatas from "./components/UserData";
import { useSelector } from "react-redux";
import classes from "./Search.module.css"

const Search = () => {
  const userDatas = useSelector((state) => state.auth.users);
  const top = {
    userId : '아이디',
    userName : '이름',
    userGender : '성별',
    userStatus : '상태',
    userEmail : '이메일'
  }
  userDatas.sort(function (a, b) {
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
      <UserDatas userData={top}/>
      <hr className={classes.horizenHr}/>
      {userDatas.map((userData, idx) => (
        <UserDatas key={idx} userData={userData} />
      ))}
    </div>
  );
};

export default Search;
