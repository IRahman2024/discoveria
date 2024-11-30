'use client'
import Image from "next/image";

const FeaturedTours = () => {
  const tours = [
    {
      title: "Tropical Beach Adventure",
      description:
        "Enjoy the serene beauty of tropical beaches with crystal-clear water and white sand.",
      imageUrl: "/tour3.jpg",
      price: "$199",
      duration: "5 days",
      location: "Maldives",
      rating: 4.7,
    },
    {
      title: "Mountain Hiking Expedition",
      description:
        "Challenge yourself with a thrilling mountain hike and enjoy breathtaking views.",
      imageUrl: "/tour2.png",
      price: "$299",
      duration: "7 days",
      location: "Nepal",
      rating: 4.9,
    },
    {
      title: "Cultural Heritage Tour",
      description:
        "Explore the rich history and culture of ancient cities with guided tours and local experiences.",
      imageUrl: "/tour1.jpg",
      price: "$149",
      duration: "3 days",
      location: "Egypt",
      rating: 4.6,
    },
  ];

  return (
    <section className="featured-tours ">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center underline md:underline-offset-4">
        Featured Tours
      </h2>
      <div className="tour-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour, index) => (
          <div key={index} className="tour-card">
            <Image
            className="rounded-lg h-[250px]"
              src={tour.imageUrl}
              alt={tour.title}
              width={400}
              height={200}
            />
            <h3 className="card-title">{tour.title}</h3>
            <p>{tour.description}</p>
            <div className="tour-info">
              <span> Location: {tour.location},</span>
              <span> Duration: {tour.duration},</span>
              <span> Price : {tour.price}</span>
            </div>
            <div className="tour-rating">
              <span>{tour.rating} <span className="text-orange-500 text-2xl">★★★★★</span></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTours;
