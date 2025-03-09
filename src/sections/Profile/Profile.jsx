import React from "react";

import Navbar from "./components/Navbar";

import IntroSection from "./components/IntroSection/IntroSection";
import ProfileSection from "./components/ProfileSection";

const Profile = () => {
    return (
        <div className="h-full w-full px-28 flex flex-col">
            <Navbar />
            <div className="grid grid-cols-2 m-0 h-full ">
               <IntroSection/>
               <ProfileSection/>
            </div>
        </div>
    );
};

export default Profile;
