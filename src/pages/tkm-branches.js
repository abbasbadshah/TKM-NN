import React from "react";
import { Link } from "react-router-dom";

const brandData = [
  {
    id: 1,
    name: "Brand One",
    logo: "/api/placeholder/80/80",
    website: "https://brand1.com",
  },
  {
    id: 2,
    name: "Brand Two",
    logo: "/api/placeholder/80/80",
    website: "https://brand2.com",
  },
  {
    id: 3,
    name: "Brand Three",
    logo: "/api/placeholder/80/80",
    website: "https://brand3.com",
  },
  {
    id: 4,
    name: "Brand Four",
    logo: "/api/placeholder/80/80",
    website: "https://brand4.com",
  },
  {
    id: 5,
    name: "Brand Five",
    logo: "/api/placeholder/80/80",
    website: "https://brand5.com",
  },
  {
    id: 6,
    name: "Brand Six",
    logo: "/api/placeholder/80/80",
    website: "https://brand6.com",
  },
];

const Card = ({ brand }) => (
  <a
    href={brand.website}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
  >
    <img
      src={brand.logo}
      alt={`${brand.name} logo`}
      className="w-20 h-20 object-contain mb-4"
    />
    <h3 className="text-lg font-semibold text-gray-800">{brand.name}</h3>
  </a>
);

export const TKMBranches = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Brand Partners
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {brandData.map((brand) => (
            <Card key={brand.id} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
};
