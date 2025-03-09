import React from "react";

import Navbar from "./components/Navbar";

import IntroSection from "./components/IntroSection/IntroSection";
import ProfileSection from "./components/ProfileSection";

const Profile = () => {
    return (
        <div className="h-screen w-full lg:px-20 xl:px-32 flex flex-col">
            <Navbar />
            <div className="grid grid-cols-[1fr_0.7fr] m-0 h-full ">
               <IntroSection/>
               <ProfileSection/>
            </div>
        </div>
    );
};

export default Profile;
