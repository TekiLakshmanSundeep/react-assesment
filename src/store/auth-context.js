import React, { useState } from "react";

const AuthContext = React.createContext({
  isLoggedin: false,
  onLogout: () => {},
  onLogin: (email, pass) => {},
  onUserNameChange: () => {},
  username: "",
});

export const AuthContextProvider = (props) => {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [enteredUserName, setUserName] = useState("");
  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const loginHandler = () => {
    if (enteredUserName) {
      setIsLoggedIn(true);
    } else {
      alert("Please enter valid user name");
    }
  };
  const logoutHandler = () => {
    setIsLoggedIn(false);
    setUserName("");
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedin: isLoggedin,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        onUserNameChange: userNameChangeHandler,
        username: enteredUserName,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
