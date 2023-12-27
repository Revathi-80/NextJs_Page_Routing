import React from "react";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  // console.log(featuredEvents);  // it's an array
  return (
    <div>
      {/* event list is just a card  and a list of featured event is passed to it*/}
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
