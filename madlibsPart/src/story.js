import React from "react";
import "./Story.css";

const Story = (props) => {
  console.log(props.props.noun);
  const noun = props.props.noun;
  const noun2 = props.props.noun2;
  const adjective = props.props.adjective;
  const color = props.props.color;
  return (
    <div>
      <p>
        Once upon a time.  There was a {color} {noun} that ate a {adjective} {noun2}. THE END
      </p>
    </div>
  );
};

export default Story;