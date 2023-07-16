import React from "react";

const EventContent = (props) => {
  const { text } = props;

  return <section>{props.children}</section>;
};

export default EventContent;
