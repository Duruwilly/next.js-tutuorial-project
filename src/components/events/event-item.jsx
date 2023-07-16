import Link from "next/link";
import Button from "../ui/Button";

import classess from "./event.module.css";

const EventItem = (props) => {
  const { title, date, location, id, image } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAdress = location?.replace(", ", "\n");

  return (
    <li className={classess.item}>
      <img src={"/" + image} alt="" />
      <div className={classess.content}>
        <div>
          <h2>{title}</h2>
          <div>
            <div>{humanReadableDate}</div>
          </div>
          <div>
            <address>{formattedAdress}</address>
          </div>
        </div>
        <div>
          <Button link={`/events/${id}`}>Explore event</Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
