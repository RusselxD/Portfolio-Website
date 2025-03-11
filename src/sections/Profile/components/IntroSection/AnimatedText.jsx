import React, { useState, useEffect } from "react";

import "./style.css";

const descriptions = ["Programmer", "Web Developer"];

function delay() {
    return new Promise((resolve) => setTimeout(resolve, 500));
}

const AnimatedText = () => {
    const [text, setText] = useState("");

    const [speed, setSpeed] = useState(120);
    const [isForward, setIsForward] = useState(true);
    const [outerIndex, setOuterIndex] = useState(0);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timeOut = setTimeout(async () => {
            if (isForward) {
                if (index > descriptions[outerIndex].length) {
                    await delay();
                    setSpeed(50);
                    setIsForward(false);
                } else {
                    setText(descriptions[outerIndex].slice(0, index));
                    setIndex(index + 1);
                }
            } else {
                if (index <= 0) {
                    setSpeed(120);
                    setIsForward(true);
                    setOuterIndex((outerIndex + 1) % descriptions.length);
                } else {
                    setText(descriptions[outerIndex].slice(0, index - 1));
                    setIndex(index - 1);
                }
            }
        }, speed);

        return () => clearTimeout(timeOut);
    }, [index, isForward]);

    return (
        <h1 className="font-bold text-xl sm:text-2xl lg:text-[1.75rem] xl:text-3xl mb-1 sm:mb-2 md:mb-3 lg:mb-3">
            {text}
            <span
                className={` ${
                    index > descriptions[outerIndex].length ? "cursor" : ""
                }`}
            >
                |
            </span>
            &nbsp;
        </h1>
    );
};

export default AnimatedText;
