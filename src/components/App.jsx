import React, { useEffect, useState } from "react";
import Router from "components/Router";
import { auth, onAuthStateChanged } from "myBase";
// import firebase from "../myBase";

function App() {
  // console.log("apps");
  const [init, setInit] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  // console.log(onAuthStateChanged, "onAuthStateChanged");
  useEffect(() => {
    ///로그인을 감시하는 감시코드
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //만약에 user가 들어온다면 ture이므로 Home이 보여진다.
        // console.log(user, "user");
        setIsLogin(true);
      } else {
        ////user가 들어오는게 아니라면 false이므로 Auth가 보여진다.
        setIsLogin(false);
      }
      setInit(true);
    });
  }, []);

  // setInterval(() => {
  //   console.log(auth.currentUser);
  // }, 2000);

  return (
    <>
      {init ? <Router isLogin={isLogin}></Router> : "Initializing.."}
      {/* <Router isLogin={isLogin}></Router> */}
      <footer> &copy; Twitter by yoen {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
