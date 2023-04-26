import React from "react";
import "./library.css";
import Title from "../Components/Title";
import MyContainer from "../Components/MyContainer";
import StoryCard from "../Components/StoryCard";
import MyBtn from "../Components/MyBtn";
import { useNavigate } from "react-router-dom";

const Library = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    console.log(e.target.getAttribute("dest"));
    navigate(-1);
  };
  const MockStories = [
    { title: "story 1 related to a boy that went to paris but forgot", key: 1 },
    { title: "story 2", key: 2 },
    { title: "story 3", key: 3 },
    { title: "story 4", key: 4 },
    { title: "story 1", key: 5 },
    /*  { title: "story 2", key: 6 },
    { title: "story 3", key: 7 },
    { title: "story 4", key: 8 },
    { title: "story 1", key: 9 },
    { title: "story 2", key: 10 },
    { title: "story 3", key: 11 },
    { title: "story 4", key: 12 }, */
  ];
  return (
    <div className="library">
      <Title>Your library</Title>
      <MyContainer addClass={"myContainer row cardCont"}>
        {MockStories.map((story) => {
          return (
            <StoryCard title={story.title} key={story.key}>
              <MyBtn dest="/reader" addClass={"myBtn storyBtn"}>
                Read This!
              </MyBtn>
            </StoryCard>
          );
        })}
      </MyContainer>
      <MyBtn dest={-1} handleClick={handleClick}>
        Go back
      </MyBtn>
    </div>
  );
};

export default Library;
