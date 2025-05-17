"use client";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/app/firebaseConfig";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ReviewForm({session}) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false); // Fix missing state

  const handleSubmit = async (e) => {
    console.log(session)
    e.preventDefault();
    if (!name || !review  ) return alert("Please fill in all fields!");

    setLoading(true);
    try {
      await addDoc(collection(db, "reviews"), {
        name,
        review,
        rating,
        image: session?.user?.image,
        createdAt: serverTimestamp(),
      });

      setReview("");
      setName("");
      setRating(5);
      toast.success("Review submitted successfully!");
    } catch (error) {
      console.error("Error adding review: ", error);
      toast.error("Review submission failed!");
    }
    setLoading(false);
    
  };

  return (
    <div className="col-span-7 p-6 bg-white shadow-lg rounded-lg">
      <h3 className="text-xl font-eb-garamond font-semibold mb-4">Leave a Review</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded-lg"
          required
        />
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              className={`cursor-pointer text-xl ${
                star <= rating ? "text-yellow-500" : "text-gray-400"
              }`}
            >
              ★
            </span>
          ))}
        </div>
        <textarea
          placeholder="Your Review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="w-full p-2 border rounded-lg"
          rows="4"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Review"}
        </button>
      </form>
    </div>
  );
}
