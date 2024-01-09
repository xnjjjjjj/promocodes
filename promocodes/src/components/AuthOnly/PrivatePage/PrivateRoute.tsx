import { Navigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import PrivateComponent from "./PrivateComponent";

const PrivateRoute: React.FC = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <PrivateComponent />;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default PrivateRoute;