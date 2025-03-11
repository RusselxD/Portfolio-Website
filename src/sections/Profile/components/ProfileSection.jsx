import React, { useEffect } from "react";
import { useState } from "react";
import profile from "../../../assets/Profile.png";

import { motion } from "framer-motion";

import c from "../../../assets/language-icons/c.svg";
import csharp from "../../../assets/language-icons/csharp.svg";
import java from "../../../assets/language-icons/java.svg";
import javascript from "../../../assets/language-icons/javascript.svg";
import reactIcon from "../../../assets/language-icons/react.svg";
import python from "../../../assets/language-icons/python.svg";

function Icon({ showIcons, properties }) {
    const { y, x, icon, color } = properties;

    return (
        <motion.div
            className="absolute w-14 lg:w-16 -z-20 "
            initial={{ y: 0, x: 0 }}
            animate={showIcons ? { y: y, x: x } : {}}
            transition={{ duration: 0.5 }}
            style={{ filter: `drop-shadow(0 0 25px ${color})` }}
        >
            <motion.img
                src={icon}
                initial={{ y: 0 }}
                animate={showIcons ? { y: [0, -25, 0] } : {}}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "loop",
                    delay: Math.random() * 1,
                }}
            />
        </motion.div>
    );
}

const ProfileSection = () => {
    const [showIcons, setShowIcons] = useState(false);

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });
    }, []);

    let rightIconsX =
        width > 1024 ? 250 : width > 768 ? 90 : width > 640 ? 230 : 210;
    let rightIconsY = width > 1024 ? 175 : width > 768 ? 250 : 150;

    let leftIconsX = width > 640 ? -250 : -190;
    let polarIconsY =
        width > 1024 ? 280 : width > 768 ? 230 : width > 640 ? 250 : 210;

    let cIconX = width > 1024 || width < 768 ? -60 : -100;
    let csIconX = width > 1024 || width < 768 ? 60 : -100;

    const iconCollections = [
        { icon: c, y: -polarIconsY, x: cIconX, color: "rgb(101,155,211)" },
        { icon: csharp, y: polarIconsY, x: csIconX, color: "rgb(130, 44, 152)" },
        { icon: java, y: 130, x: leftIconsX, color: "rgb(236, 32, 37)" },
        {
            icon: javascript,
            y: rightIconsY,
            x: rightIconsX,
            color: "rgb(247, 224, 24)",
        },
        { icon: reactIcon, y: -100, x: leftIconsX, color: "rgb(97, 219, 251)" },
        {
            icon: python,
            y: -rightIconsY,
            x: rightIconsX,
            color: "rgb(65, 130, 180)",
        },
    ];

    function handleShowIcons() {
        setShowIcons(!showIcons);
    }

    return (
        <div className="w-full h-3/5 mb-32 md:h-full flex justify-center items-center relative">
            <div className="w-full flex justify-center items-center relative">
                <div className="h-80 sm:h-[21rem] md:h-72 lg:h-[22rem] xl:h-[26rem] relative">
                    {!showIcons && (
                        <div
                            className="absolute -top-9 sm:-top-9 left-3 w-8 h-8 bg-primary"
                            style={{ clipPath: "polygon(50% 100%,100% 0,0 0)" }}
                        ></div>
                    )}
                    {!showIcons && (
                        <div
                            className="absolute rounded-md -top-14 md:-top-14 left-0 text-sm sm:text-base md:text-xs px-5 py-[0.60rem] md:py-3"
                            style={{ backgroundColor: "rgb(64, 223, 136)" }}
                        >
                            Click to view my Tech Stack!
                        </div>
                    )}
                    <img
                        onClick={handleShowIcons}
                        src={profile}
                        className="rounded-md cursor-pointer h-full focus:outline-none border-2 border-black
                                  active:translate-x-2 active:translate-y-2 transition-transform duration-100 ease-in-out"
                    />
                    <span className="rounded-md -z-10 absolute bg-black top-4 left-4 w-full h-full"></span>
                </div>
                {iconCollections.map((icon, i) => {
                    return <Icon showIcons={showIcons} properties={icon} key={i} />;
                })}
            </div>
        </div>
    );
};

export default ProfileSection;
