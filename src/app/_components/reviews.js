"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa6";

const Reviews = () => {
  const reviewData = [
  {
    id: "1",
    name: "Jessica Hope",
    review: "Absolutely love the quality and the customer service. Will definitely order again!",
    rating: 5,
    image: "/reviews1.jpg",
  },
  {
    id: "2",
    name: "Emily Stone",
    review: "Fast delivery and exactly as described. Super happy with my purchase!",
    rating: 4,
    image: "/rview2.jpg",
  },
  {
    id: "3",
    name: "Amina S.",
    review: "My go-to store for jewelry. Stylish, affordable, and beautiful!",
    rating: 5,
    image: "/review2.jpg",
  },
];

  return (
    <div>
      <div className="mt-14 mb-24">
        <h2 className="font-eb-garamond text-primary text-3xl custom-heading border-primary border-b-2">
          Customers Reviews
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-8 lg:px-20 w-[90%] mx-auto text-center">
        {reviewData.map((review) => (
          <div key={review.id} className="relative w-64 h-64 mx-auto">
            <div className="absolute inset-0 bg-secondary rotate-[8deg] rounded-lg"></div>

            <div className="relative bg-white rounded-lg shadow-lg w-full h-full flex flex-col items-center p-6">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                <Image
                  src={review.image}
                  alt={review.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="pt-8 text-center">
                <h3 className="font-medium mb-2">{review.name}</h3>
                <p className="text-sm mb-3">{review.review}</p>

                <div className="flex justify-center space-x-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar
                      key={i}
                      className={i < review.rating ? "text-yellow-500" : "text-gray-300"}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

