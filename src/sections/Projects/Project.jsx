import React, { useEffect, useState } from "react";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

const Project = ({ i, properties }) => {
    const { thumbnail, title, link } = properties;

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.7 });

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        let resizeTimer;
        window.addEventListener("resize", () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                setWindowWidth(window.innerWidth);
            }, 5);
        });
    }, []);

    const hidenXAxis = i % 2 !== 0 ? 100 : -100;
    const yAxis = i % 2 !== 0 && windowWidth > 768 ? 112 : 0;

    return (
        <div className="w-full flex justify-center items-center">
            <motion.div
                style={{ willChange: "transform" }}
                ref={ref}
                initial={{
                    x: hidenXAxis,
                    y: yAxis,
                    opacity: 0,
                }}
                animate={
                    inView
                        ? {
                              x: 0,
                              y: yAxis,
                              opacity: 1,
                          }
                        : {}
                }
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative w-[80%] md:w-5/6 lg:w-4/5 shadow-[10px_10px_0px_rgba(39,204,114,255)] border-2 border-black rounded-2xl overflow-hidden ${
                    i % 2 !== 0 ? "md:translate-y-16" : ""
                }`}
            >
                <div>
                    <a href={link} target="_blank">
                        <img
                            src={thumbnail}
                            className="h-full object-cover object-center"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-transparent z-10 hover:bg-[rgba(0,0,0,0.2)] transition-colors duration-300 ease-in-out"></div>
                        <div
                            className="flex items-center absolute bottom-0 w-full h-28"
                            style={{
                                background:
                                    "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0, 0.8) 100%)",
                            }}
                        >
                            <p className="text-white pl-5 pt-7 text-xl lg:text-2xl  font-bold">
                                {title}
                            </p>
                        </div>
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default Project;
