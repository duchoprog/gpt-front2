import React, { useContext } from "react";
import "./myBtn.css";
import StoryContext from "../context/StoryContext";
import { CreateStory } from "../utils/createStory";
import { useNavigate } from "react-router-dom";
const CreateStoryBtn = ({ children, addClass }) => {
  const navigate = useNavigate();

  const { setLoading, storyParams, setStory, loading } =
    useContext(StoryContext);

  const handleClick = () => {
    setStory(CreateStory(setLoading, storyParams, setStory, loading));
    navigate("/Reader");
    setLoading(false);
  };
  return (
    <div className={addClass ? addClass : "myBtn"} onClick={handleClick}>
      {children}
    </div>
  );
};

export default CreateStoryBtn;
