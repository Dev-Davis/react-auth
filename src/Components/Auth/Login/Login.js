import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  doSignInWithEmailAndPassword,
  // doSignInWithGoogle,
} from "../../../firebase/auth";
import { useAuth } from "../../../Contexts/AuthContext/AuthContext";
import Home from "../../Home/Home";

export default function Login() {
  const { userLoggedIn } = useAuth();

  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      doSignInWithEmailAndPassword(email, password);
      console.log(email, password);
      navigate(<Home />)
    }
  };

  return (
    <div>
      <div className="container signup-box text-center">
        <div className="row">
          <div className="col">
            <form onSubmit={onSubmit} className="text-center space-y-5">
            {/* <br /> */}
              <div className="email-section">
                <label className="">Email</label>
                <br />
                <input
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="email-input"
                />
              </div>
              {/* <br /> */}
              <div className="password-section">
                <label className="">Password</label>
                <br />
                <input
                  type="password"
                  autoComplete="password"
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="password-input"
                />
              </div>
              <br />
              <button
                type="submit"
                disabled={isSigningIn}
                className="log-btn btn btn-dark"
              >
                {isSigningIn ? "Signing In..." : "Sign In"}
              </button>
            </form>
            <br />
            <p className="text-center text-sm">
              Don't have an account?{" "}
              <Link to={"/register"} className="hover:underline font-bold">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
