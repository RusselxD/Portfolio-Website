import React from "react";

import ProfileLinks from "./ProfileLinks";

const IntroSection = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center -mt-14">
            <div className="h-fit">
                <h2 className="text-2xl font-semibold mb-3 text-primary">Hi,</h2>
                <h1 className="font-bold text-4xl mb-3">
                    I'm <span className="text-[rgba(10,207,245,255)]">Russel</span>
                </h1>
                <h1 className="font-bold text-4xl mb-5 sm:text-red-600 md:text-blue-600 lg:text-green-600 xl:text-yellow-600">
                    Programmer &amp; Web Developer
                </h1>
                <p
                    className="text-slate-700 text-base mb-6 leading-9"
                    // style={{ lineHeight: "3rem" }}
                >
                    I’m an IT student passionate about programming and building
                    functional, user-friendly applications. I love exploring new
                    technologies and constantly improving my ability to create
                    efficient, scalable, and well-designed solutions.
                </p>
                <div className="">
                    <ProfileLinks />
                </div>
            </div>
        </div>
    );
};

export default IntroSection;
