import React, { useEffect, useState } from "react";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

const Project = ({ i, properties }) => {
    const { thumbnail, title } = properties;

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const hidenXAxis = i % 2 !== 0 ? 300 : -300;
    const yAxis = i % 2 !== 0 ? 112 : 0;
    return (
        <div className="w-full border border-violet-900 flex justify-center items-center">
            <motion.div
                ref={ref}
                initial={{ x: hidenXAxis, y: yAxis, opacity: 0 }}
                animate={inView ? { x: 0, y: yAxis, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative w-4/5 border-[3px] border-black  ${
                    i % 2 !== 0 ? "translate-y-16" : ""
                }`}
            >
                <img src={thumbnail} className="h-full object-cover object-center" />
                <div
                    className="flex items-center absolute bottom-0 w-full h-24 border border-black  "
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(39,204,114,0.8) 100%)",
                    }}
                >
                    <p className="pl-5 text-2xl font-bold">{title}</p>
                </div>
            </motion.div>
        </div>
    );
};

export default Project;
