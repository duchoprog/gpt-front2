import React from "react";
import "./reader.css";
import MyBtn from "../Components/MyBtn";
import MyContainer from "../Components/MyContainer";
import Title from "../Components/Title";
const Reader = () => {
  const mockStory = {
    title: "The story of Pip and pop in Paris",
    story: `once upon a time, in the beautiful city of Paris there lived a boy callled Pip.
    He liked riding his bicycle in the park. One day he met a talking puppy, Pop`,
    id: "abc123",
  };
  return (
    <div className="reader">
      <Title text={mockStory.title ? mockStory.title : ""}></Title>
      <MyContainer
        style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}
      >
        <p>{mockStory.story ? mockStory.story : "Nothing to report"}</p>
      </MyContainer>

      <MyBtn
        text="Read this!"
        dest="/reader"
        addClass={"myBtn cardBtn"}
      ></MyBtn>
    </div>
  );
};

export default Reader;
