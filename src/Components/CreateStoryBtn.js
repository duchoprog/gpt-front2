import React, { useContext } from "react";
import "./myBtn.css";
import StoryContext from "../context/StoryContext";
import { CreateStory } from "../utils/createStory";
import { useNavigate } from "react-router-dom";
const CreateStoryBtn = ({ children, addClass }) => {
  const navigate = useNavigate();

  const { setLoading, storyParams, setStory, story } = useContext(StoryContext);

  const handleClick = async () => {
    console.log(story);
    setLoading(true);
    let text = await CreateStory(storyParams);
    await setStory((story) => ({ ...story, text: text }));
    navigate("/Reader");
    setLoading(false);
    await console.log(story);
  };
  return (
    <div className={addClass ? addClass : "myBtn"} onClick={handleClick}>
      {children}
    </div>
  );
};

export default CreateStoryBtn;
