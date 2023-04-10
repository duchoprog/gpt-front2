import React from "react";
import "./card.css";
import Title from "./Title";
import MyContainer from "./MyContainer";
const StoryCard = ({ addClass, title, key, children }) => {
  const handleStoryClick = (e) => {};
  return (
    <div
      key={key}
      id={title}
      className={addClass ? addClass : "card"}
      onClick={handleStoryClick}
    >
      <MyContainer addClass="myContainer cardTitle">
        <Title addClass="title storyCardTitle">{title}</Title>
      </MyContainer>
      {children}
    </div>
  );
};

export default StoryCard;
