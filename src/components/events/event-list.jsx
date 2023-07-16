import React from "react";
import EventItem from "./event-item";

import classess from "./event.module.css"

const EventList = (props) => {
  const { items } = props;

  return (
    <ul className={classess.list}>
      {items.map((item) => (
        <EventItem
          key={item.id}
          id={item.id}
          location={item.location}
          date={item.date}
          image={item.image}
          title={item.title}
        />
      ))}
    </ul>
  );
};

export default EventList;
