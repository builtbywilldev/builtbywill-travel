export const createFakeTrip = (formData: TripFormData) => {
  const {
    country,
    duration,
    budget,
    interest,
    travelStyle,
    groupType,
  } = formData;

  return {
    id: crypto.randomUUID(),
    name: `Escape to ${country}`,
    description: `A personalized ${duration}-day trip exploring ${interest} in ${country}.`,
    estimatedPrice: "$1,550",
    duration,
    budget,
    travelStyle,
    country,
    interests: interest,
    groupType,
    bestTimeToVisit: [
      "🌸 Spring (Mar–May): Gorgeous bloom + cultural festivals",
      "☀️ Summer (Jun–Aug): Beaches + nightlife",
      "🍁 Autumn (Sep–Nov): Scenic views, fewer tourists",
      "❄️ Winter (Dec–Feb): Hot springs + winter sports"
    ],
    weatherInfo: [
      "☀️ Summer: 28–35°C (82–95°F)",
      "🌦️ Spring: 18–25°C (64–77°F)",
      "🌧️ Autumn: 15–22°C (59–72°F)",
      "❄️ Winter: -1–7°C (30–45°F)"
    ],
    location: {
      city: "Kyoto",
      coordinates: [35.0116, 135.7681],
      openStreetMap: "https://www.openstreetmap.org/search?query=Kyoto"
    },
    itinerary: Array.from({ length: duration }, (_, i) => ({
      day: i + 1,
      location: "Kyoto",
      activities: [
        { time: "Morning", description: "🏯 Visit temples and shrines" },
        { time: "Afternoon", description: "🍜 Sample street food + markets" },
        { time: "Evening", description: "🛍️ Walk through Gion District" }
      ]
    })),
    createdAt: new Date().toISOString()
  };
};
