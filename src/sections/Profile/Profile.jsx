import React from "react";

import Navbar from "./components/Navbar";

import IntroSection from "./components/IntroSection/IntroSection";
import ProfileSection from "./components/ProfileSection";

const Profile = () => {
    return (
        <div className="sm:h-fit md:h-screen w-full px-3 md:px-4 lg:px-20 xl:px-32 flex flex-col">
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-[1fr_0.5fr] lg:grid-cols-[1fr_0.7fr] m-0 h-full ">
                <IntroSection />
                <ProfileSection />
            </div>
        </div>
    );
};

export default Profile;
