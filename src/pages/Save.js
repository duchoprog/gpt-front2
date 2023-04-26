import React, { useContext } from "react";
import Title from "../Components/Title";
import StoryContext from "../context/StoryContext";

const Save = () => {
  const { storyParams, setStoryParams } = useContext(StoryContext);
  const updateInput = (e) => {
    setStoryParams({ ...storyParams, [e.target.id]: e.target.value });
  };
  return (
    <div className="save">
      <Title>Save your story</Title>
    </div>
  );
};

export default Save;
