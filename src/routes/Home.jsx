import { addDoc, collection } from "firebase/firestore";
import { dbService } from "myBase";
import React from "react";
import { useState } from "react/cjs/react.development";

const Home = () => {
  const [tweet, setTweet] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    addDoc(collection(dbService, "tweet"), {
      first: "첫번째",
    });
  };

  const onChange = (e) => {
    setTweet(e.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={tweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="tweet" />
      </form>
    </div>
  );
};

export default Home;
