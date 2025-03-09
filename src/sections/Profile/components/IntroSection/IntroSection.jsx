import React from "react";

import ProfileLinks from "./ProfileLinks";

const IntroSection = () => {
    return (
        <div className="w-full pl-2 flex justify-center items-center -mt-16">
            <div className="h-fit">
                <h2 className="text-3xl font-semibold mb-5 text-primary">Hi,</h2>
                <h1 className="font-bold text-5xl mb-6">
                    I'm <span className="text-[rgba(10,207,245,255)]">Russel</span>
                </h1>
                <h1 className="font-bold text-4xl mb-5">
                    Programmer &amp; Web Developer
                </h1>
                <p
                    className="text-slate-700 text-base mb-6"
                    style={{ lineHeight: "3rem" }}
                >
                    I’m an IT student passionate about programming and building
                    functional, user-friendly applications. I love exploring new
                    technologies and constantly improving my ability to create
                    efficient, scalable, and well-designed solutions.
                </p>
                <div>
                    <ProfileLinks />
                </div>
            </div>
        </div>
    );
};

export default IntroSection;
