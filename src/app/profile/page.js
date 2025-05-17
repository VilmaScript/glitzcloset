"use client";

import { useSession } from "next-auth/react";
import ProfileHeader from "../_components/ProfileHeader";
import ProfileSideBar from "../_components/ProfileSideBar";
import { FaHeart } from "react-icons/fa";
import ContactInfo from "../_components/ContactInfo";
import { useState } from "react";

export default function Profile() {
  const { data: session } = useSession();
  const [showFavs, setShowFavs] = useState(false);


  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-medium">Not signed in</h1>
        <a
          href="/signin"
          className="mt-4 px-6 py-2 bg-primary text-white rounded-md"
        >
          Go to Sign In
        </a>
      </div>
    );
  }

  return (
    <div>
      <div
        onClick={() => setShowFavs(true)}
        className="md:hidden flex gap-2 items-center text-primary mt-5 cursor-pointer"
      >
        <FaHeart /> <p>Click me to see your Favorites</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[15vw_1fr] gap-6 ">
        <div>
          <ProfileSideBar />
          <ProfileSideBar
            isMobile
            isOpen={showFavs}
            onClose={() => setShowFavs(false)}
          />
        </div>

        <div className="md:border-l-2">
          <ProfileHeader session={session} />
          
          <ContactInfo session={session} />
        </div>
      </div>
    </div>
  );
}