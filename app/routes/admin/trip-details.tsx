import { useLocation } from "react-router-dom";
import { TripCard } from "components";

const TripDetails = () => {
  const { state } = useLocation();

  const popularTrips = [
    {
      id: "trip-001",
      name: "Tropical Rewind",
      imageUrls: ["/images/sample1.jpg"],
      itinerary: [
        {
          day: 1,
          location: "Thailand",
          activities: [
            { time: "Morning", description: "Temple visit" },
            { time: "Afternoon", description: "Market food crawl" },
            { time: "Evening", description: "Beach walk" },
          ],
        },
      ],
      interests: "Adventure",
      travelStyle: "Solo",
      budget: "Moderate",
      groupType: "Solo",
      estimatedPrice: "$1,000",
      country: "Thailand",
      description: "A chill solo journey into the tropics of Thailand.",
      bestTimeToVisit: ["Spring (Mar–May): Blossoms", "Summer: Fun + Sun"],
      weatherInfo: ["28–35°C, tropical"],
    },
    {
      id: "trip-002",
      name: "Zen Break",
      imageUrls: ["/images/sample3.jpg"],
      itinerary: [
        {
          day: 1,
          location: "Japan",
          activities: [
            { time: "Morning", description: "Visit Kyoto temples" },
            { time: "Afternoon", description: "Sushi tasting" },
            { time: "Evening", description: "Cherry blossom walk" },
          ],
        },
      ],
      interests: "Luxury",
      travelStyle: "Couple",
      budget: "Premium",
      groupType: "Couple",
      estimatedPrice: "$3,000",
      country: "Japan",
      description: "A romantic escape into Japanese calm.",
      bestTimeToVisit: ["Spring (Mar–May): Sakura", "Fall: Scenic serenity"],
      weatherInfo: ["Mild (15–25°C)"],
    },
    {
      id: "trip-003",
      name: "Alpine Quest",
      imageUrls: ["/images/sample4.jpg"],
      itinerary: [
        {
          day: 1,
          location: "Switzerland",
          activities: [
            { time: "Morning", description: "Mountain hike" },
            { time: "Afternoon", description: "Lakeside picnic" },
            { time: "Evening", description: "Hot chocolate by fire" },
          ],
        },
      ],
      interests: "Nature",
      travelStyle: "Friends",
      budget: "Luxury",
      groupType: "Friends",
      estimatedPrice: "$2,400",
      country: "Switzerland",
      description: "An alpine escape through nature and friends.",
      bestTimeToVisit: ["Winter: Snowboarding", "Spring: Waterfalls"],
      weatherInfo: ["Cold, 0–10°C in winter"],
    },
  ];

const tripId = location.pathname.split("/").pop();
const trip = state || popularTrips.find((t) => t.id === tripId) || popularTrips[0];

  const visitTimeAndWeatherInfo = [
    { title: "Best Time to Visit", items: trip.bestTimeToVisit },
    { title: "Weather", items: trip.weatherInfo },
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