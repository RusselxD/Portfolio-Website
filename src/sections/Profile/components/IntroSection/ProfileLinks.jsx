import React, { useState } from "react";
import { FaLink } from "react-icons/fa";
import { motion } from "framer-motion";

import instagramIcon from "../../../../assets/instagram.svg";
import githubIcon from "../../../../assets/github.svg";
import facebookIcon from "../../../../assets/facebook.svg";
import leetcodeIcon from "../../../../assets/leetcode.svg";

const profiles = [
    {
        icon: instagramIcon,
        link: "https://www.instagram.com/russel.__.c/",
        userName: "@russel.__c",
    },
    {
        icon: githubIcon,
        link: "https://github.com/RusselxD",
        userName: "RusselxD",
    },
    {
        icon: facebookIcon,
        link: "https://web.facebook.com/russel.cbgqz",
        userName: "russel.cbgqz",
    },
    {
        icon: leetcodeIcon,
        link: "https://leetcode.com/u/RusselxD/",
        userName: "RusselxD",
    },
];

function Links({ profile }) {
    const { icon, link, userName } = profile;

    return (
        <a href={link} target="_blank">
            <div className="px-3 py-3 w-full h-full flex justify-start items-center hover:bg-gray-200">
                <img src={icon} className="w-5 lg:w-7 mr-2" />
                <p className="text-xs lg:text-sm">{userName}</p>
            </div>
        </a>
    );
}

const ProfileLinks = () => {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <div className="relative w-fit">
            <div className="w-fit relative">
                <motion.button
                    whileHover={{
                        x: 2,
                        y: 2,
                    }}
                    whileTap={{
                        x: 6,
                        y: 6,
                    }}
                    transition={{
                        duration: 0.08,
                    }}
                    className="px-5 py-3 bg-black text-white text-sm lg:text-base"
                    onClick={() => setShowLinks(!showLinks)}
                >
                    My Profiles
                    <FaLink className="inline-block text-primary ml-3" />
                </motion.button>
                <span className="absolute left-[0.40rem] top-[0.40rem] w-full h-full -z-10 bg-primary border-2 border-black"></span>
            </div>
            {showLinks && (
                <div className="shadow-[0_0_5px_black] bg-[rgba(255,255,255,0.2)] backdrop-blur-md rounded-lg w-60 md:w-64 lg:w-[19rem] h-fit absolute top-16 left-2 border border-black overflow-hidden">
                    <div className="grid grid-cols-2">
                        {profiles.map((profile, i) => {
                            return <Links key={i} profile={profile} />;
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileLinks;
