"use client"

import Image from "next/image"
import { LuLogOut } from "react-icons/lu";
import { signOut } from "next-auth/react";


const ProfileHeader = ({ session }) => {
  return (
    <div >
      <div className="h-[20vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/profileheader.jpg')" }}>
      </div>
      <div className="md:flex block justify-between items-center px-4 -mt-12">
        <div className="flex items-center space-x-4 p-4">
          <Image src={session.user.image} alt="profile" width={100} height={100} className="rounded-full" />
          <div>
            <h3 className="font-medium text-base md:text-xl mt-2 text-primary">{session.user.name}</h3>
            <p className=" text-secondary text-sm md:text-base">{session.user.email}</p>
          </div>
        </div>
        <div onClick={() => signOut({ callbackUrl: "/signin" })} className="flex space-x-2 text-primary items-center cursor-pointer ">
          <LuLogOut />
          <p>Log Out</p>
        </div>
      </div>
    </div>

  )
}

export default ProfileHeader