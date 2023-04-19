import React, { useContext } from "react";
import "./create.css";
import Title from "../Components/Title";
import MyContainer from "../Components/MyContainer";
import LocCard from "../Components/LocCard";
import { locations } from "../../src/utils/locations";
import StoryContext from "../context/StoryContext";
import CreateStoryBtn from "../Components/CreateStoryBtn";
import MyBtn from "../Components/MyBtn";
import { Spinner } from "../Components/Spinner";
import Modal from "../Components/Modal";

const Create = () => {
  const { storyParams, setStoryParams, loading } = useContext(StoryContext);

  const updateInput = (e) => {
    setStoryParams({ ...storyParams, [e.target.id]: e.target.value });
  };

  return (
    <div className="create">
      {loading && (
        <Modal>
          <Spinner></Spinner>
        </Modal>
      )}
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
            <LocCard data-place="place" title={loc} key={loc}>
              {loc}
            </LocCard>
          );
        })}
      </MyContainer>
      <MyContainer addClass="myContainer row buttons">
        <CreateStoryBtn addClass="myBtn createBtn">
          Create my story!
        </CreateStoryBtn>
        <MyBtn dest={"/"}>go back</MyBtn>
      </MyContainer>
    </div>
  );
};

export default Create;
