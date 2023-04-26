import React, { createContext, useState } from "react";

const StoryContext = createContext({});

export const StoryProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState("");
  const [story, setStory] = useState({ text: "", title: "", id: "" });
  const [warning, setWarning] = useState({
    text: "",
    dest: "",
    btn1: "",
    btn2: "",
  });
  const [storyParams, setStoryParams] = useState({
    star: "",
    friend: "",
    place: "",
  });

  return (
    <StoryContext.Provider
      value={{
        story,
        setStory,
        storyParams,
        setStoryParams,
        loading,
        setLoading,
        modal,
        setModal,
        warning,
        setWarning,
      }}
    >
      {children}
    </StoryContext.Provider>
  );
};

export default StoryContext;
