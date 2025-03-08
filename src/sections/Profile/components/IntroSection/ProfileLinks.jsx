import React, { useState } from "react";
import { FaLink } from "react-icons/fa";
import { motion, transform } from "framer-motion";

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
                <div className="absolute w-40 h-20 top-16 left-2 bg-slate-700"></div>
            )}
        </div>
    );
};

export default ProfileLinks;
