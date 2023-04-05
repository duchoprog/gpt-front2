import React from "react";
import "./library.css";
import Title from "../Components/Title";
import MyContainer from "../Components/MyContainer";
import Card from "../Components/Card";
import MyBtn from "../Components/MyBtn";

const Library = () => {
  const MockStories = [
    { title: "story 1 related to a boy that went to paris", key: 1 },
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
      <Title text="Your library" />
      <MyContainer addClass={"myContainer row cardCont"}>
        {MockStories.map((story) => {
          return (
            <Card title={story.title} key={story.key}>
              <MyBtn
                text="Read this!"
                dest="/reader"
                addClass={"myBtn cardBtn"}
              ></MyBtn>
            </Card>
          );
        })}
      </MyContainer>
      <MyBtn text="Go back" dest="/"></MyBtn>
    </div>
  );
};

export default Library;