import { Navigate } from "react-router-dom";

export const CreateStory = async (
  setLoading,
  storyParams,
  setStory,
  loading
) => {
  setLoading(true);
  await fetch("http://localhost:8000/openai-api", {
    method: "POST",
    body: JSON.stringify({
      friend: storyParams.friend,
      star: storyParams.star,
      city: storyParams.place,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setStory(data);
      Navigate("/reader");
      setLoading(false);
    })
    .catch((err) => {
      console.log(err.message);
      setLoading(false);
    });
};
