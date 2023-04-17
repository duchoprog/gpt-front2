import React, { useContext } from "react";
import "./reader.css";
import MyBtn from "../Components/MyBtn";
import MyContainer from "../Components/MyContainer";
import Title from "../Components/Title";
import StoryContext from "../context/StoryContext";
const Reader = () => {
  const { story } = useContext(StoryContext);
  return (
    <div className="reader">
      <Title text={story.title ? story.title : ""}></Title>
      <MyContainer>
        <p>{story.story ? story.story : "Nothing to report"}</p>
      </MyContainer>

      <MyBtn dest="/library" addClass={"myBtn cardBtn"}>
        Go back
      </MyBtn>
    </div>
  );
};

export default Reader;
