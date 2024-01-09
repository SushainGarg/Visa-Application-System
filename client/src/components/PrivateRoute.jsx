import {useSelector } from "react-redux";
import { Outlet , Navigate} from "react-router-dom";

export default function PrivateRoute() {
    const {currentApplicant} = useSelector((state) => state.applicant);
  return currentApplicant ? <Outlet/> : <Navigate to="/sign-in" />;
}
