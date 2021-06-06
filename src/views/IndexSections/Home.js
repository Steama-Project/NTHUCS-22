import React from "react";
import Landing from "../examples/Landing";
import { selectCurrentUser } from "views/redux/user/user-selector";
import { useSelector } from "react-redux";
import Admin from "../examples/Admin";

function Home() {
  const currentUser = useSelector((state) => selectCurrentUser(state));
  const { user } = currentUser;

  return <div>{user.admin ? <Admin /> : <Landing />}</div>;
}

export default Home;
