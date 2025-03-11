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
            className="absolute w-16 md:w-14 lg:w-16 -z-20 "
            initial={{ y: 0, x: 0 }}
            animate={showIcons ? { y: y, x: x } : {}}
            transition={{ duration: 0.5 }}
            style={{ filter: `drop-shadow(0 0 25px ${color})` }}
        >
            <motion.img
                src={icon}
                initial={{ y: 0 }}
                animate={{ y: [0, -25, 0] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "loop",
                    delay: Math.random() * 2,
                }}
            />
        </motion.div>
    );
}

const ProfileSection = () => {
    const [showIcons, setShowIcons] = useState(false);

    let rightIconsX =
        window.innerWidth > 1024
            ? 250
            : window.innerWidth < 640
            ? 180
            : window.innerWidth < 768
            ? 250
            : 90;
    let rightIconsY =
        window.innerWidth > 1024 || window.innerWidth < 768 ? 150 : 280;
    let leftIconsX = window.innerWidth > 640 ? -250 : -190;
    let polarIconsY =
        window.innerWidth > 1024 ? 280 : window.innerWidth < 768 ? 240 : 260;
    let cIconX = window.innerWidth > 1024 || window.innerWidth < 768 ? -60 : -100;
    let csIconX = window.innerWidth > 1024 || window.innerWidth < 768 ? 60 : -100;

    useEffect(() => {
        window.addEventListener("resize", () => {
            rightIconsX =
                window.innerWidth > 1024 || window.innerWidth < 640
                    ? 180
                    : window.innerWidth < 768
                    ? 250
                    : 90;
            rightIconsY =
                window.innerWidth > 1024 || window.innerWidth < 768 ? 150 : 280;
            leftIconsX = window.innerWidth > 640 ? -250 : -190;
            polarIconsY =
                window.innerWidth > 1024 ? 280 : window.innerWidth < 768 ? 240 : 260;
            cIconX =
                window.innerWidth > 1024 || window.innerWidth < 768 ? -60 : -100;
            csIconX =
                window.innerWidth > 1024 || window.innerWidth < 768 ? 60 : -100;

            setShowIcons(false);
            // hide icons on resize
        });
    }, []);

    function handleShowIcons() {
        setShowIcons(!showIcons);
    }

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

    return (
        <div className="w-full h-3/5 mb-32 md:h-full flex justify-center items-center relative">
            <div className="w-full flex justify-center items-center relative">
                <div className="h-72 sm:h-[22rem] md:h-80 lg:h-[24rem] xl:h-[26rem] relative">
                    {!showIcons && (
                        <div
                            className="absolute -top-9 left-3 w-8 h-8 bg-primary"
                            style={{ clipPath: "polygon(50% 100%,100% 0,0 0)" }}
                        ></div>
                    )}
                    {!showIcons && (
                        <div className="absolute rounded-md -top-20 left-0 text-sm sm:text-base text-white bg-primary px-5 py-3">
                            Click to view my Tech Stack!
                        </div>
                    )}

                    <img
                        onClick={handleShowIcons}
                        src={profile}
                        className="rounded-md cursor-pointer h-full focus:outline-none
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
