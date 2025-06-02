import { Header, TripCard } from "components";
import { allTrips } from "~/constants"; // ✅ your static trip data
import React from "react";

const Trips = () => {
  return (
    <main className="all-users wrapper">
      <Header
        title="Trips 🕌"
        description="View and edit AI-generated travel plans"
        ctaText="Create a Trip"
        ctaUrl="/trips/create"
      />

      <section className="trip-grid mt-8">
        {allTrips.map((trip) => (
          <TripCard
            key={trip.id}
            id={String(trip.id)} // ✅ convert to string to match routes like /trip-001
            name={trip.name}
            imageUrl={trip.imageUrls[0]}
            location={trip.itinerary?.[0]?.location ?? ""}
            tags={trip.tags}
            price={trip.estimatedPrice}
          />
        ))}
      </section>
    </main>
  );
};

export default Trips;
