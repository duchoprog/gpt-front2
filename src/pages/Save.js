import React, { useContext } from "react";
import Title from "../Components/Title";
import StoryContext from "../context/StoryContext";
import MyContainer from "../Components/MyContainer";
import MyBtn from "../Components/MyBtn";
import { useAuth0 } from "@auth0/auth0-react";
import { SaveStory } from "../utils/saveStory";

const Save = () => {
  const { user, isAuthenticated } = useAuth0();
  const { story, setStory } = useContext(StoryContext);
  const updateInput = (e) => {
    setStory({ ...story, [e.target.id]: e.target.value });
  };
  let cleanText = story.text.substr(story.text.indexOf("Once upon"));
  let textArray = cleanText.split("\n\n");

  const handleClick = () => {
    let saveResult = SaveStory(story, "nohayemail");
  };
  return (
    <div className="save">
      <Title>Save your story</Title>
      <MyContainer addClass=" myContainer input">
        <label htmlFor="star" id="starLbl">
          What's the title of the story?
        </label>
        <input id="title" onChange={updateInput} value={story.title}></input>
        <MyBtn handleClick={handleClick}>Save the story with this title</MyBtn>
      </MyContainer>
      <MyContainer addClass="myContainer storyText">
        {textArray.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
        {story.text && <p>The end.</p>}
      </MyContainer>
    </div>
  );
};

export default Save;
