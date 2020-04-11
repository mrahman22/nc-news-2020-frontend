import React from "react";
import { patchVotes } from "./api";

const Voter = (props) => {
  const updateVotes = (voteDirection) => {
    const article_id = props.article_id;
    patchVotes(article_id, voteDirection).then(({ data }) => {
      props.addVotes(data.article);
    });
  };

  return (
    <div>
      <button
        onClick={(e) => {
          updateVotes(1);
        }}
      >
        LIKE
      </button>
      <button
        onClick={(e) => {
          updateVotes(-1);
        }}
      >
        DISLIKE
      </button>
    </div>
  );
};

export default Voter;
