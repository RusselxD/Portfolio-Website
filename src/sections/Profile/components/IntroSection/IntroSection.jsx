import React from "react";

import ProfileLinks from "./ProfileLinks";
import AnimatedText from "./AnimatedText";

const IntroSection = () => {
    return (
        <div className="h-[50vh] sm:h-[90vh] mb-52 sm:mb-10 md:mb-0 md:h-full md:-mt-20 w-full flex justify-center items-center">
            <div className="mt-10 sm:-mt-28 md:h-fit md:mt-20">
                <h2 className="text-[1.40rem] sm:text-[1.3rem] md:text-2xl lg:text-2xl xl:text-2xl font-semibold md:mb-3 lg:mb-2 xl:mb-3 text-primary">
                    Hi,
                </h2>
                <h1 className="font-bold text-[1.75rem] sm:text-4xl md:text-4xl lg:text-[2.25rem] xl:text-[2.50rem] sm:mb-2 lg:mb-2 xl:mb-4">
                    I'm <span className="text-[rgba(10,207,245,255)]">Russel</span>
                </h1>
                <AnimatedText />
                <p className="text-slate-700 text-xs sm:text-[0.850rem] md:text-sm lg:text-[0.9rem] xl:text-base mb-2 sm:mb-5 md:mb-5 lg:mb-5 leading-7 sm:leading-9 md:leading-9 lg:leading-9 xl:leading-[2.4rem]">
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
