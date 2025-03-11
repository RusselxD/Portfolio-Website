import React, { useState, useEffect } from "react";

import ProfileLinks from "./ProfileLinks";

import "./style.css";
import AnimatedText from "./AnimatedText";

const IntroSection = () => {
    // const [text, setText] = useState(" ");

    // useEffect(() => {
    //     let i = 0;

    //     let forward = true;
    //     let speed = 150;

    //     const timeOut = setTimeout(() => {
    //         if (i === test.length + 1) {
    //             forward = false;
    //             i--;
    //             speed = 150;
    //             // setText(test.slice(0, i));
    //             // i++;
    //             // console.log("hey");
    //         } else if (i === 0) {
    //             forward = true;
    //             speed = 90;
    //         } 

    //         if(forward){
    //             setText(test.slice(0, i));
    //             i++;
    //             console.log("forward");
    //         } else {
    //             setText(test.slice(0, i - 1));       
    //             i--;
    //             console.log("back")         
    //         }

    //     }, speed);
    // }, []);

    return (
        <div className="h-[50vh] sm:h-[75vh] mb-[19rem] sm:mb-12 md:mb-0 md:h-screen -mt-0 md:-mt-28 lg:-mt-32 w-full flex justify-center items-center">
            <div className="mt-28 sm:-mt-28 md:h-fit md:mt-28">
                <h2 className="text-[1.5rem] sm:text-[2rem] md:text-3xl lg:text-3xl xl:text-4xl font-semibold mb-2 md:mb-5 lg:mb-3 xl:mb-5 text-primary">
                    Hi,
                </h2>
                <h1 className="font-bold text-[2rem] sm:text-4xl md:text-4xl lg:text-[2.50rem] xl:text-5xl sm:mb-3 lg:mb-3 xl:mb-5">
                    I'm <span className="text-[rgba(10,207,245,255)]">Russel</span>
                </h1>
                {/* <h1 className="lg:leading-10 font-bold text-2xl sm:text-3xl lg:text-[2rem] xl:text-4xl mb-4 sm:mb-5 md:mb-6 lg:mb-4">
                    {text}
                </h1> */}
                <AnimatedText/>
                <p className="text-slate-700 md:text-sm lg:text-[1rem] xl:text-lg mb-4 sm:mb-5 md:mb-8 lg:mb-6 leading-9 sm:leading-10 md:leading-8 lg:leading-10 xl:leading-[2.7rem]">
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
