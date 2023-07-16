import EventContent from "@/components/EventDetails/EventContent";
import EventLogistics from "@/components/EventDetails/EventLogistics";
import EventSummary from "@/components/EventDetails/EventSummary";
import { useRouter } from "next/router";
import { getEventsById } from "../../../dummy-data";

const EventDetailsPage = () => {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventsById(eventId);

  if (!event) {
    return <p>No event found</p>;
  }
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailsPage;
