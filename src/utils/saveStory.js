import { useNavigate } from "react-router-dom";

export const SaveStory = async (story, author) => {
  let returnable;
  await fetch("http://localhost:8000/stories/saveStory", {
    method: "POST",
    body: JSON.stringify({
      title: story.title,
      author: author,
      text: story.text,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      returnable = data;
    })
    .catch((err) => {
      returnable = err;
    });
  console.log(returnable);
  return returnable;
};
