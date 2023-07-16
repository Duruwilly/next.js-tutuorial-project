const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Programming for everyone",
    description:
      "Everyone can to learn to code! Yes, everyone! in this live event, we are going to learn how to build this project with next.js. please enjoy.",
    location: "somestreet 25, 12345 san somewhere",
    date: "2021-05-12",
    image: "images/third.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Networking for introverts",
    description:
      "We know: Networking is no fun if you are introvert person. That's why we said everyone can to learn to code! Yes, everyone! in this live event, we are going to learn how to build this project with next.js. please enjoy.",
    location: "New Wall  Street 25, 4325 New work",
    date: "2021-05-30",
    image:
      "images/first.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Networking for extroverts",
    description:
      "You probably need to help with networking in general. But focusing your energy on coding will do you good. That's why we said everyone can to learn to code! Yes, everyone! in this live event, we are going to learn how to build this project with next.js. please enjoy.",
    location: "My  Street 12, 10115 Broke city",
    date: "2022-04-10",
    image:
      "images/second.jpg",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export const getAllEvents = () => {
  return DUMMY_EVENTS;
};

export const getFilteredEvents = (dateFilter) => {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);

    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
};

export const getEventsById = (id) => {
  return DUMMY_EVENTS.find((event) => event.id === id);
};
