"use client";
import React, { useState } from "react";
import Image from "next/image";
const FeaturedRooms = () => {
  // Static JSON data for rooms
  const roomsData = [
    {
      id: 1,
      name: "Deluxe King Room",
      description:
        "A luxurious room with a king-size bed, modern amenities, and a stunning view of the city skyline.",
      pricePerNight: 120,
      features: ["Free WiFi", "Air Conditioning", "Room Service", "Smart TV"],
      capacity: 2,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Ocean View Suite",
      description:
        "Spacious suite with panoramic ocean views, private balcony, and premium furnishings.",
      pricePerNight: 250,
      features: ["Ocean View", "Private Balcony", "Free Breakfast", "Mini Bar"],
      capacity: 4,
      rating: 4.9,
    },
    {
      id: 3,
      name: "Family Room",
      description:
        "A perfect choice for families, equipped with two queen-size beds and a cozy seating area.",
      pricePerNight: 180,
      features: [
        "Free WiFi",
        "Children’s Play Area",
        "Kitchenette",
        "Complimentary Snacks",
      ],
      capacity: 4,
      rating: 4.7,
    },
    {
      id: 4,
      name: "Honeymoon Suite",
      description:
        "Romantic suite with a private Jacuzzi, rose petal decorations, and complimentary champagne.",
      pricePerNight: 300,
      features: [
        "Private Jacuzzi",
        "Romantic Decor",
        "Free Breakfast",
        "Soundproof",
      ],
      capacity: 2,
      rating: 5.0,
    },
    {
      id: 5,
      name: "Standard Single Room",
      description:
        "An affordable and comfortable option for solo travelers, with basic amenities and a clean design.",
      pricePerNight: 75,
      features: ["Free WiFi", "Air Conditioning", "Flat Screen TV", "Desk"],
      capacity: 1,
      rating: 4.3,
    },
  ];

  // State for rooms
  const [rooms, setRooms] = useState(roomsData);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center underline md:underline-offset-4">
        Featured Rooms
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            {/* Room Details */}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {room.name}
              </h3>
              <p className="text-gray-600 mt-2">{room.description}</p>
              <p className="text-lg font-bold text-blue-600 mt-4">
                ${room.pricePerNight}/night
              </p>
              <ul className="mt-2 text-sm text-gray-500">
                {room.features.map((feature, index) => (
                  <li key={index}>- {feature}</li>
                ))}
              </ul>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRooms;
