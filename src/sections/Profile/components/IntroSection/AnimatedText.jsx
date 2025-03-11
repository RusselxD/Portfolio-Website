import React, { useState, useEffect } from "react";

const test = "Programmer";

const AnimatedText = () => {
    const [text, setText] = useState("");

    const [isForward, setIsForward] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            if (isForward) {
                if (index > test.length) {
                    setIsForward(false);
                } else {
                    setText(test.slice(0, index));
                    setIndex(index + 1);
                }
            } else {
                if (index <= 0) {
                    setIsForward(true);
                } else {
                    setText(test.slice(0, index - 1));
                    setIndex(index - 1);
                }
            }
        }, 150);

        return () => clearTimeout(timeOut);
    }, [index, isForward]);

    return (
        <h1 className="lg:leading-10 font-bold text-2xl sm:text-3xl lg:text-[2rem] xl:text-4xl mb-4 sm:mb-5 md:mb-6 lg:mb-4">
            {text}
        </h1>
    );
};

export default AnimatedText;
