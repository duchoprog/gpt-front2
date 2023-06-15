import { Navigate } from "react-router-dom";

export const CreateStory = async (storyParams) => {
  let returnable;
  console.log(storyParams);
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
      returnable = data;
      Navigate("/reader");
    })
    .catch((err) => {
      console.log(err.message);
    });
  return returnable;
};
