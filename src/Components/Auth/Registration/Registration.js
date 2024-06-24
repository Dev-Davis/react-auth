import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Home from '../../Home/Home';
import { doCreateUserWithEmailAndPassword } from "../../../firebase/auth";

import userData from "../../../data/userData";

const defaultUser = {
  username: "",
  email: "",
  password: "",
  city: "",
  state: "",
  createDate: Date.now(),
  isAdmin: false,
};

export default function Registration() {
  {
    /* ***** Registration state ***** */
  }
  const [username, setUsername] = useState("");
  const [email, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  {
    /* ***** App state ***** */
  }
  const [newUser, setNewUser] = useState(defaultUser);
  const [city, setCity] = useState("");
  const [stateSelection, setStateSelection] = useState("");

  const selState = userData.states;
  // const user = userData.GetUsersById();

  const navigate = useNavigate();

  // const { userLoggedIn } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();

    // checks if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // if email exists, return user already exists

    const saveNewUser = { ...newUser };
    saveNewUser.username = username;
    saveNewUser.email = email;
    saveNewUser.password = password;
    saveNewUser.city = city;
    saveNewUser.state = stateSelection;
    setStateSelection(e.target.value);

    userData
      .postNewUser(saveNewUser)
      .then(() => {
        setNewUser(defaultUser);
      })
      .then((res) => {
        console.log(res)
        navigate(<Home user={res} />)
      });

    if (!isRegistering) {
      setIsRegistering(true);
      await doCreateUserWithEmailAndPassword(email, password);
    }
  };

  const handleSelectChange = (e) => {
  };

  return (
    <div>
      {/* {userLoggedIn && <Navigate to={"/home"} replace={true} />} */}
      <div className="container signup-box text-center">
        <div className="row">
          <div className="col">
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="">
                  Username
                </label>
                <br />
                <input
                  type="text"
                  autoComplete="text"
                  required
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  className=""
                />
              </div>
              {/* ******************** */}
              {/* ***** Username ***** */}
              {/* ******************** */}
              <div>
                <label className="">Email</label>
                <br />
                <input
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setUserEmail(e.target.value);
                  }}
                  className=""
                />
              </div>

              {/* ******************** */}
              {/* ***** Password ***** */}
              {/* ******************** */}
              <div>
                <label className="">
                  Password
                </label>
                <br />
                <input
                  disabled={isRegistering}
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className=""
                />
              </div>

              {/* **************************** */}
              {/* ***** Confirm Password ***** */}
              {/* **************************** */}
              <div>
                <label className="">
                  Confirm Password
                </label>
                <br />
                <input
                  disabled={isRegistering}
                  type="password"
                  autoComplete="off"
                  required
                  value={confirmPassword}
                  onChange={(e) => {
                    setconfirmPassword(e.target.value);
                  }}
                  className=""
                />
              </div>

              {/* **************** */}
              {/* ***** City ***** */}
              {/* **************** */}
              <div>
                <label htmlFor="name">City:</label>
                <br />
                <input
                  type="text"
                  id="userCity"
                  placeholder="Enter a city (ex: Nashville)"
                  className=""
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
              </div>

              {/* ***************** */}
              {/* ***** State ***** */}
              {/* ***************** */}
              <div>
                <label htmlFor="name">State:</label>
                <br />
                <select
                  onChange={handleSelectChange}
                  name="platform"
                  id="platform"
                  // onChange={(e) => filterGames(e, "platform")}
                  className=""
                >
                  {selState.map((state) => (
                    <option value={state} key={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              <br />

              {/* ****************** */}
              {/* ***** Submit ***** */}
              {/* ****************** */}
              <button
                type="submit"
                disabled={isRegistering}
                className="btn btn-dark"
              >
                {isRegistering ? "Signing Up..." : "Sign Up"}
              </button>
              <br />
              <br />
              <div className="text-sm text-center">
                Already have an account?
                <Link
                  to={"/"}
                  className="text-center text-sm hover:underline font-bold"
                >
                  &nbsp; Continue
                </Link>
              </div>
            </form>
            {/* <p>Already a customer?</p> */}

            {/* <NavLink to={"/"}>Login</NavLink>
            <p>or</p>
            <NavLink to={"/"}>Continue As Guest</NavLink> */}
          </div>
        </div>
      </div>
    </div>
  )
}
