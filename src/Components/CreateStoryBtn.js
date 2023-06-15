import React, { useContext } from "react";
import "./myBtn.css";
import StoryContext from "../context/StoryContext";
import { CreateStory } from "../utils/createStory";
import { useNavigate } from "react-router-dom";
const CreateStoryBtn = ({ children, addClass }) => {
  const navigate = useNavigate();

  const { setLoading, storyParams, setStory, story, setModal } =
    useContext(StoryContext);

  const handleClick = async () => {
    //setModal("<Spinner></Spinner>");
    setLoading(true);
    /* let { textResponse, imageResponse } = await CreateStory(storyParams); */
    let x = await CreateStory(storyParams);
    await console.log(x);
    await setStory((story) => ({
      ...story,
      text: x.text,
      image: { addresses: x.image[0], base64: x.image[1] },
    }));
    navigate("/Reader");
    //setModal("");
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
