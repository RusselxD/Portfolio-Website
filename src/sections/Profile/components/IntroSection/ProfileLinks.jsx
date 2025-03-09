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
                <img src={icon} className="w-7 mr-2" />

                <p className="text-sm">{userName}</p>
            </div>
        </a>
    );
}

const ProfileLinks = () => {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <div className="relative w-fit border border-green-700">
            <div className="border border-red-700 w-fit relative">
                <motion.button
                    whileHover={{
                        x: 3,
                        y: 3,
                    }}
                    whileTap={{
                        x: 6,
                        y: 6,
                    }}
                    transition={{
                        duration: 0.08,
                    }}
                    className="px-5 py-3 bg-black text-white"
                    onClick={() => setShowLinks(!showLinks)}
                >
                    My Profiles
                    <FaLink className="inline-block text-primary ml-3" />
                </motion.button>
                <span className="absolute left-[0.40rem] top-[0.40rem] w-full h-full -z-10 bg-primary border-2 border-black"></span>
            </div>
            {showLinks && (
                <div className="rounded-lg w-[19rem] h-fit absolute top-16 left-2 border border-black grid grid-cols-2 grid-rows-2 overflow-hidden">
                    {profiles.map((profile, i) => {
                        return <Links profile={profile} />;
                    })}
                </div>
            )}
        </div>
    );
};

export default ProfileLinks;
