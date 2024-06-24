import React, { useLocation } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "../Home/Home";
import Login from "../Auth/Login/Login";
import Registration from "../Auth/Registration/Registration";
import Navbar from "../Navbar/Navbar";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import PrivateRoutes from "../PrivateRoutes";

import { useAuth } from "../../Contexts/AuthContext/AuthContext";

export default function AppRouter(props) {
  const { currentUser } = useAuth();
  const { path } = props;
  console.log("path", path);
  // console.log(authed);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route element={<PrivateRoutes authed={currentUser} />}>
            <Route path="/home" exact element={<Home />} />
            <Route path="/profile" exact element={<Profile />} />
          </Route>
          <Route path="/" exact element={<Login />} />
          <Route path="/register" exact element={<Registration />} />
          <Route element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
