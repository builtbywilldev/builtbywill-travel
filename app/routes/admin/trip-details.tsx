import { useLocation } from "react-router-dom";
import { TripCard } from "components";


const TripDetails = () => {
  const { state: trip } = useLocation();

  if (!trip) return <p className="p-6 text-red-500">❌ Trip not found</p>;

  const visitTimeAndWeatherInfo = [
    { title: "Best Time to Visit", items: trip.bestTimeToVisit },
    { title: "Weather", items: trip.weatherInfo },
  ];

  const popularTrips = [
  {
    id: "trip-001",
    name: "Tropical Rewind",
    imageUrls: ["/images/sample1.jpg"],
    itinerary: [{ location: "Thailand" }],
    interests: "Adventure",
    travelStyle: "Solo",
    estimatedPrice: "$1,000",
  },
  {
    id: "trip-002",
    name: "Zen Break",
    imageUrls: ["/images/sample3.jpg"],
    itinerary: [{ location: "Japan" }],
    interests: "Luxury",
    travelStyle: "Couple",
    estimatedPrice: "$3,000",
  },
  {
    id: "trip-003",
    name: "Alpine Quest",
    imageUrls: ["/images/sample4.jpg"],
    itinerary: [{ location: "Switzerland" }],
    interests: "Nature",
    travelStyle: "Friends",
    estimatedPrice: "$2,400",
  },
];


  return (
    <main className="wrapper-md py-10 space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-navy-900">{trip.name}</h1>
        <p className="text-gray-600 text-base">{trip.description}</p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-dark-500">
        <div><strong>🌍 Country:</strong> {trip.country}</div>
        <div><strong>📅 Duration:</strong> {trip.duration} days</div>
        <div><strong>💰 Budget:</strong> {trip.budget}</div>
        <div><strong>🧭 Style:</strong> {trip.travelStyle}</div>
        <div><strong>👥 Group:</strong> {trip.groupType}</div>
        <div><strong>💸 Price:</strong> {trip.estimatedPrice}</div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-navy-800">🗓️ Itinerary</h2>
        {trip.itinerary.map((day: any) => (
          <div
            key={day.day}
            className="rounded-xl bg-white p-5 border border-navy-100 shadow-sm"
          >
            <p className="text-lg font-semibold text-navy-900">
              Day {day.day}: {day.location}
            </p>
            <ul className="mt-2 space-y-1 text-dark-600 text-sm">
              {day.activities.map((act: any, i: number) => (
                <li key={i}>
                  <span className="font-semibold text-dark-800">{act.time}:</span>{" "}
                  {act.description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-navy-800">🌤️ Travel Info</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {visitTimeAndWeatherInfo.map((section) => (
            <div key={section.title} className="bg-white p-4 rounded-md shadow-sm border border-navy-100">
              <h3 className="text-md font-bold text-navy-700">{section.title}</h3>
              <ul className="list-disc pl-5 mt-2 text-sm text-dark-600">
                {section.items?.map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 Popular Trips */}
     <section className="flex flex-col gap-6 pt-10 border-t border-gray-200">
  <h2 className="text-2xl font-semibold text-navy-800">🔥 Popular Trips</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
    {popularTrips.map((t) => (
      <TripCard
        key={t.id}
        id={t.id}
        name={t.name}
        imageUrl={t.imageUrls?.[0]}
        location={t.itinerary?.[0]?.location ?? ""}
        tags={[t.interests, t.travelStyle]}
        price={t.estimatedPrice}
      />
    ))}
  </div>
</section>


    </main>
  );
};

export default TripDetails;