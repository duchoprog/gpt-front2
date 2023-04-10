import React, { useState } from "react";
import "./create.css";
import Title from "../Components/Title";
import MyContainer from "../Components/MyContainer";
import LocCard from "../Components/LocCard";
import { locations } from "../../src/utils/locations";
import MyBtn from "../Components/MyBtn";

const Create = () => {
  const [storyParams, setStoryParams] = useState({
    star: "",
    friend: "",
    place: "",
  });

  const updateInput = (e) => {
    setStoryParams({ ...storyParams, [e.target.id]: e.target.value });
  };

  return (
    <div className="create">
      <Title addClass="title main">Let's create a new story</Title>
      <MyContainer addClass=" myContainer inputCont">
        <MyContainer addClass=" myContainer input">
          <label htmlFor="star" id="starLbl">
            What's the name of the star?
          </label>
          <input
            id="star"
            onChange={updateInput}
            value={storyParams.star}
          ></input>
        </MyContainer>
        <MyContainer addClass=" myContainer input">
          <label htmlFor="friend" id="sidekickLbl">
            What's the name of their buddy?
          </label>
          <input
            id="friend"
            onChange={updateInput}
            value={storyParams.friend}
          ></input>
        </MyContainer>
      </MyContainer>
      <Title addClass="title where">Where will this story happen?</Title>
      <MyContainer addClass="places">
        {locations.map((loc) => {
          return (
            <LocCard
              data-place="place"
              addClass={"card loc"}
              title={loc}
              key={loc}
              storyParams={storyParams}
              setStoryParams={setStoryParams}
            >
              {loc}
            </LocCard>
          );
        })}
      </MyContainer>
      <MyBtn text="Create my story!" addClass="myBtn createBtn"></MyBtn>
    </div>
  );
};

export default Create;
