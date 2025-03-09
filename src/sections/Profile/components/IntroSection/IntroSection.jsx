import React from "react";

import ProfileLinks from "./ProfileLinks";

const IntroSection = () => {
    return (
        <div className="lg:-mt-32 w-full flex justify-center items-center">
            <div className="h-fit">
                <h2 className="lg:text-3xl xl:text-4xl font-semibold lg:mb-3 xl:mb-5 text-primary">Hi,</h2>
                <h1 className="font-bold lg:text-[2.50rem] xl:text-5xl lg:mb-3 xl:mb-5">
                    I'm <span className="text-[rgba(10,207,245,255)]">Russel</span>
                </h1>
                <h1 className="lg:leading-10 font-bold lg:text-[2rem] xl:text-4xl lg:mb-4">
                    Programmer &amp; Web Developer
                </h1>
                <p className="text-slate-700 lg:text-[1rem] xl:text-lg mb-6 lg:leading-10 xl:leading-[2.7rem]">
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
