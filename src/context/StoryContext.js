import React, { createContext, useState } from "react";

const StoryContext = createContext({});

export const StoryProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [story, setStory] = useState("");
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
      }}
    >
      {children}
    </StoryContext.Provider>
  );
};

export default StoryContext;
