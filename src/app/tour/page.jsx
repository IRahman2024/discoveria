"use client"

const tourData = [
  {
    image: "https://i.ibb.co.com/VHCny38/pexels-asadphoto-1268855.jpg",
    title: "Beautiful Beach",
    price: "$250 per person",
    description:
      "Enjoy a relaxing day at one of the most beautiful beaches in the world. Sun, sand, and waves await you!",
  },
  {
    image: "https://i.ibb.co.com/VHCny38/pexels-asadphoto-1268855.jpg",
    title: "Mountain Adventure",
    price: "$300 per person",
    description:
      "Explore the stunning mountain ranges with guided hikes, breathtaking views, and thrilling adventures.",
  },
  {
    image: "https://i.ibb.co.com/VHCny38/pexels-asadphoto-1268855.jpg",
    title: "City Escape",
    price: "$150 per person",
    description:
      "Discover the hidden gems of the city with a fun and informative tour. Perfect for all ages!",
  },
];

export default function Tour() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Explore Our Tours</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tourData.map((tour, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {tour.title}
              </h2>
              <p className="text-gray-500 mt-1">{tour.price}</p>
              <p className="text-sm text-gray-600 mt-2">{tour.description}</p>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
