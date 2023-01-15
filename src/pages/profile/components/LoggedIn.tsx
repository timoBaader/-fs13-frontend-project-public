import { Avatar, Button } from "@mui/material";
import React from "react";

import { useAppDispatcher, useAppSelector } from "../../../hooks/reduxHook";
import { UserReducerStateProp } from "../../../interfaces/UserReducerStateProp";
import { logout } from "../../../redux/reducers/userReducer";

const LoggedIn = () => {
  const userState: UserReducerStateProp = useAppSelector((state) => {
    return state.userReducer;
  });

  const dispatch = useAppDispatcher;

  const handleLogout = () => {
    //dispatch(logout());
  };

  return (
    <div>
      <Avatar alt="Profile image" src={userState.user.avatar} />
      <p>{userState.user.name}</p>
      <Button variant="contained" onClick={() => handleLogout()}>
        Logout
      </Button>
    </div>
  );
};

export default LoggedIn;
