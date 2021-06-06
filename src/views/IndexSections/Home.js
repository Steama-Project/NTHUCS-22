import React from "react";
import Landing from "../examples/Landing";
import { selectCurrentUser } from "views/redux/user/user-selector";
import { useSelector } from "react-redux";
import Admin from "../examples/Admin";

function Home() {
  const currentUser = useSelector((state) => selectCurrentUser(state));
  const { user } = currentUser;

  return (
    <div>
      {/* {
            user._id==='60bbd424779539bdd8d08aed'?<Admin />  : <Landing />
        } */}
      <Admin />
    </div>
  );
}

export default Home;
