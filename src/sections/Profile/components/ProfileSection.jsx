import React from "react";
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
            className="absolute w-16 -z-20 "
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

const iconCollections = [
    { icon: c, y: -260, x: -60, color: "rgb(101,155,211)" },
    { icon: csharp, y: 270, x: 60, color: "rgb(130, 44, 152)" },
    { icon: java, y: 170, x: -250, color: "rgb(236, 32, 37)" },
    { icon: javascript, y: 90, x: 250, color: "rgb(247, 224, 24)" },
    { icon: reactIcon, y: -100, x: -250, color: "rgb(97, 219, 251)" },
    { icon: python, y: -170, x: 250, color: "rgb(65, 130, 180)" },
];

const ProfileSection = () => {
    const [showIcons, setShowIcons] = useState(false);

    function handleShowIcons() {
        setShowIcons(!showIcons);
    }

    return (
        <div className="w-full h-full flex justify-center items-center relative">
            <div className="w-full flex justify-center items-center relative">
                <div className="lg:h-[24rem] xl:h-[26rem] relative">
                    {!showIcons && (
                        <div
                            className="absolute -top-9 left-3 w-8 h-8 bg-primary"
                            style={{ clipPath: "polygon(50% 100%,100% 0,0 0)" }}
                        ></div>
                    )}
                    {!showIcons && (
                        <div className="absolute rounded-md -top-20 left-0 text-white bg-primary px-5 py-3">
                            Click to view my Tech Stack!
                        </div>
                    )}

                    <motion.img
                        onClick={handleShowIcons}
                        src={profile}
                        className="cursor-pointer h-full focus:outline-none"
                        whileTap={{
                            x: 10,
                            y: 10,
                        }}
                        transition={{
                            duration: 0.08,
                        }}
                    />
                    <span className="-z-10 absolute bg-black top-4 left-4 w-full h-full"></span>
                </div>
                {iconCollections.map((icon, i) => {
                return <Icon showIcons={showIcons} properties={icon} key={i} />;
            })}
            </div>
        </div>
    );
};

export default ProfileSection;
