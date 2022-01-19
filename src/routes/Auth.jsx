// import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "myBase";
import React, { useState } from "react";

const Auth = () => {
  console.log("auth");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const onChange = (e) => {
    // console.log(e.target.value);
    const {
      target: { name, value },
    } = e;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let data;
      if (newAccount) {
        //계정생성
        console.log(newAccount, "newAccount");
        data = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        //로그인
        data = await signInWithEmailAndPassword(auth, email.password);
      }
      console.log(data);
    } catch (error) {
      ///이미 있는 아이디로 가입을 하면 error코드
      setError(error.message);
    }
  };

  ///아래 함수가 실행되면서 state값으로 newAccount이전값을
  //가져와  반대로 바뀌면서 btn과 span테그의 텍스트가 바뀐다.
  const toggleAccount = () => {
    setNewAccount((prev) => !prev);
  };

  const onSocial = async (e) => {
    const {
      target: { name },
    } = e;
    let provider;
    if (name === "google") {
      provider = new GoogleAuthProvider();
      // signInWithPopup(auth, provider);
    } else if (name === "github") {
      provider = new GithubAuthProvider();
    }
    await signInWithPopup(auth, provider);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
        {error}
      </form>
      <span onClick={toggleAccount}>
        {newAccount ? "Log In" : "Create Account"}
      </span>
      <div>
        <button name="google" onClick={onSocial}>
          Continue with Google
        </button>
        <button name="github" onClick={onSocial}>
          Continue with Github
        </button>
      </div>
    </div>
  );
};

export default Auth;
