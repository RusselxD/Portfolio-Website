import React from "react";

import profile from "../../../assets/Profile.png";

const ProfileSection = () => {
    return (
        <div className="border border-red-600 w-full flex justify-center items-center">
            <img src={profile} className="h-96 shadow-[8px_8px_0px_black]" />
        </div>
    );
};

export default ProfileSection;
