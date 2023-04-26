import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./create.css";
import Title from "../Components/Title";
import MyContainer from "../Components/MyContainer";
import LocCard from "../Components/LocCard";
import { locations } from "../../src/utils/locations";
import StoryContext from "../context/StoryContext";
import CreateStoryBtn from "../Components/CreateStoryBtn";
import MyBtn from "../Components/MyBtn";
import Modal from "../Components/Modal";
import LoginButton from "../Components/LoginButton";
import Profile from "../Components/Profile";
import LogoutButton from "../Components/LogoutButton";

const Create = () => {
  const { storyParams, setStoryParams, modal } = useContext(StoryContext);
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate(e.target.getAttribute("dest"));
  };

  const updateInput = (e) => {
    setStoryParams({ ...storyParams, [e.target.id]: e.target.value });
  };

  return (
    <div className="create">
      {modal && <Modal>modal</Modal>}
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
        <MyBtn dest={"/"} handleClick={handleClick}>
          go back
        </MyBtn>
      </MyContainer>
      <LoginButton>adentro</LoginButton>
      <LogoutButton></LogoutButton>
      <Profile></Profile>
    </div>
  );
};

export default Create;
