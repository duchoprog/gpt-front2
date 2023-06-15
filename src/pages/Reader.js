import React, { useContext } from "react";
import "./reader.css";
import MyBtn from "../Components/MyBtn";
import MyContainer from "../Components/MyContainer";
import Title from "../Components/Title";
import StoryContext from "../context/StoryContext";
import MyDangerousBtn from "../Components/MyDangerousBtn";
import { useAuth0 } from "@auth0/auth0-react";
import Modal from "../Components/Modal";

const Reader = () => {
  const { story, setWarning, warning, setModal, modal } =
    useContext(StoryContext);
  let cleanText = story.text.substr(story.text.indexOf("Once upon"));
  let textArray = cleanText.split("\n\n");
  const handleDanger = (e) => {
    setWarning({
      text: e.target.getAttribute("text"),
      text2: e.target.getAttribute("text2"),
      btn1: e.target.getAttribute("btn1"),
      btn1dest: e.target.getAttribute("btn1dest"),
      btn2: e.target.getAttribute("btn2"),
      btn2dest: e.target.getAttribute("btn2dest"),
    });
    setModal("<Warning></Warning>");
  };

  return (
    <div className="reader">
      {modal && !story.id && <Modal>modal</Modal>}
      <Title>{story.title ? story.title : "My story"}</Title>
      <img
        src={`data:image/png;base64,${story.image.base64}`}
        alt={`depiction of the story `}
      />

      <MyContainer>
        {textArray.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
        {story.text && <p>The end.</p>}
      </MyContainer>
      <hr></hr>
      <MyContainer addClass="myContainer btnContainer">
        <MyBtn addClass={"myBtn cardBtn"}>Give a title</MyBtn>
        <MyBtn
          dest="/save"
          addClass={"myBtn cardBtn"}
          message="You need to be logged in to save your story"
        >
          save story
        </MyBtn>
        <MyDangerousBtn
          dest="/library"
          addClass={"myBtn cardBtn"}
          message="If you leave this story, you wont be able to read it again. Would you like to save it before Leaving?"
        >
          Library
        </MyDangerousBtn>
        <MyDangerousBtn
          addClass={"myBtn cardBtn"}
          text="If you leave this story, you wont be able to read it again. Would you like to save it before Leaving?"
          text2="(You will need to login to be able to save the story)"
          btn1="Yes, save this story!"
          btn2="No, don't save it"
          btn1dest="/save"
          btn2dest="/create"
          handleDanger={handleDanger}
        >
          Create Story
        </MyDangerousBtn>
      </MyContainer>
    </div>
  );
};

export default Reader;
