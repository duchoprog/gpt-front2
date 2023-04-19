import React from "react";
import "./home.css";
import Title from "../Components/Title";
import MyContainer from "../Components/MyContainer";
import MyBtn from "../Components/MyBtn";

const Home = () => {
  return (
    <div className="home">
      <Title addClass="title main">
        <p>Stories by</p> <p className="rotated">me!</p>{" "}
      </Title>

      <MyContainer>
        <Title addClass="title">
          Would you like to read a story from the library or create a new one?
        </Title>
        <MyContainer addClass="myContainer row">
          <MyBtn addClass="myBtn rotate-2" dest="./library">
            STORY FROM LIBRARY
          </MyBtn>
          <MyBtn addClass="myBtn rotate2" dest="./create">
            NEW STORY
          </MyBtn>
        </MyContainer>
      </MyContainer>
    </div>
  );
};

export default Home;
