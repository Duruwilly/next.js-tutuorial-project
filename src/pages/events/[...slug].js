import EventList from "@/components/events/event-list";
import ResultTitle from "@/components/events/result-title";
import { useRouter } from "next/router";
import React from "react";
import { getFilteredEvents } from "../../../dummy-data";

const FilteredEventsPage = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  // convert to number
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid filter. please adjust your values!</p>;
  }

  const filteredEvent = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filteredEvent || filteredEvent.length === 0) {
    return <p>No Event Found!</p>;
  }

  const date = new Date(numYear, numMonth - 1);
  return (
    <>
      <ResultTitle date={date} />
      <EventList items={filteredEvent} />
    </>
  );
};

export default FilteredEventsPage;
