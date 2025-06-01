import { useLocation } from "react-router-dom";

const TripDetails = () => {
  const { state: trip } = useLocation();

  if (!trip) return <p className="p-6 text-red-500">❌ Trip not found</p>;

  return (
    <main className="wrapper-md py-10 space-y-6">
      <h1 className="text-3xl font-bold">{trip.name}</h1>
      <p className="text-gray-600">{trip.description}</p>

      <ul className="text-sm space-y-1">
        <li><strong>Country:</strong> {trip.country}</li>
        <li><strong>Duration:</strong> {trip.duration} days</li>
        <li><strong>Budget:</strong> {trip.budget}</li>
        <li><strong>Style:</strong> {trip.travelStyle}</li>
        <li><strong>Group:</strong> {trip.groupType}</li>
        <li><strong>Price:</strong> {trip.estimatedPrice}</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">🗓️ Itinerary</h2>
      {trip.itinerary.map((day: any) => (
        <div key={day.day} className="bg-gray-100 p-4 rounded">
          <p className="font-bold">Day {day.day}: {day.location}</p>
          <ul className="list-disc pl-5 mt-1">
            {day.activities.map((act: any, i: number) => (
              <li key={i}><strong>{act.time}:</strong> {act.description}</li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
};

export default TripDetails;
