import React from "react";
import "./home.css";
import Title from "../Components/Title";
import MyContainer from "../Components/MyContainer";
import MyBtn from "../Components/MyBtn";

const Home = () => {
  return (
    <div className="home">
      <Title text="Stories by me" addClass="title main" />
      <MyContainer>
        <Title
          addClass="title"
          text="Would you like to read a story from the library or create a new one?"
        ></Title>
        <MyContainer addClass="myContainer row">
          <MyBtn
            text="STORY FROM LIBRARY"
            addClass="myBtn rotate-2"
            dest="./library"
          ></MyBtn>
          <MyBtn
            text="NEW STORY"
            addClass="myBtn rotate2"
            dest="./create"
          ></MyBtn>
        </MyContainer>
      </MyContainer>
    </div>
  );
};

export default Home;
