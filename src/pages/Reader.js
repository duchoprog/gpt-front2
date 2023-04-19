import React, { useContext } from "react";
import "./reader.css";
import MyBtn from "../Components/MyBtn";
import MyContainer from "../Components/MyContainer";
import Title from "../Components/Title";
import StoryContext from "../context/StoryContext";
import MyDangerousBtn from "../Components/MyDangerousBtn";
const Reader = () => {
  const { story } = useContext(StoryContext);
  let textArray = story.text.split("\n\n");

  return (
    <div className="reader">
      <Title>{story.title ? story.title : "My story"}</Title>
      <MyContainer>
        {textArray.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </MyContainer>
      <MyContainer addClass="myContainer btnContainer">
        <MyBtn addClass={"myBtn cardBtn"}>Give a title</MyBtn>
        <MyBtn dest="/save" addClass={"myBtn cardBtn"}>
          save story
        </MyBtn>
        <MyDangerousBtn dest="/library" addClass={"myBtn cardBtn"}>
          Library
        </MyDangerousBtn>
        <MyDangerousBtn dest="/create" addClass={"myBtn cardBtn"}>
          Create Story
        </MyDangerousBtn>
      </MyContainer>
    </div>
  );
};

export default Reader;
