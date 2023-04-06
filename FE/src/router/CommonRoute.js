import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PublicRoute = () => {
  const isLogined = useSelector((state) => state.auth.isLogin);

  const type = useSelector((state) => state.auth.userType);
  return isLogined ? (type? <Navigate to="/mypage" /> : <Navigate to="/admin" />) : <Outlet />;
};

export default PublicRoute;
