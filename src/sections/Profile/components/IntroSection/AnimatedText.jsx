import React, { useState, useEffect } from "react";

const descriptions = ["Programmer", "Web Developer"];

const test = "Programmer";

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
        <h1 className="lg:leading-10 font-bold text-2xl sm:text-3xl lg:text-[2rem] xl:text-4xl mb-4 sm:mb-5 md:mb-6 lg:mb-4">
            {text}&nbsp;
        </h1>
    );
};

export default AnimatedText;
