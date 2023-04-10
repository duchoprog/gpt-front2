import React from "react";
import "./reader.css";
import MyBtn from "../Components/MyBtn";
import MyContainer from "../Components/MyContainer";
import Title from "../Components/Title";
const Reader = () => {
  const mockStory = {
    title: "The story of Pip and pop in Paris",
    story: `once upon a time, in the beautiful city of Paris there lived a boy callled Pip.
    He liked riding his bicycle in the park. One day he met a talking puppy, Pop. 
    Pop was black with a white spot in the ass. This forced him to be extra careful 
    when wiping his ass
    after taking a shit, because he didn't want to have brown stains. 
    Besides, he loved eating salmon
    and drinking iced tea. On the other hand, he didn't like to bathe, so it wasn't unusual 
    for pip     to smell his friend from blocks away.`,
    id: "abc123",
  };
  return (
    <div className="reader">
      <Title text={mockStory.title ? mockStory.title : ""}></Title>
      <MyContainer>
        <p>{mockStory.story ? mockStory.story : "Nothing to report"}</p>
      </MyContainer>

      <MyBtn dest="/library" addClass={"myBtn cardBtn"}>
        Go back
      </MyBtn>
    </div>
  );
};

export default Reader;
