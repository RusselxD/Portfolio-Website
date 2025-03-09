import React from "react";

function ProjectsHeader() {
    return (
        <div className="w-1/2 border border-red-600">
            <h1 className="font-bold text-4xl mb-3">HTML &amp; CSS Projects</h1>
            <p className="text-lg" style={{ lineHeight: "2rem" }}>
                Here are some of the projects I have worked on for Web Systems and
                Technologies.
            </p>
        </div>
    );
}

import sampleThumbnail from "../../assets/project-thumbnails/sample.png";

function Project() {
    return (
        <div className="w-full border border-violet-900 flex justify-center items-center">
            <div className="mb-28 -mt-16 relative w-4/5 border-2 border-black">
                <img
                    src={sampleThumbnail}
                    className="h-full object-cover object-center"
                />
                <div
                    className="flex items-center absolute bottom-0 w-full h-24 border border-black  "
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(39,204,114,0.8) 100%)",
                    }}
                >
                    <p className="pl-5 text-2xl font-bold">Title Nigga</p>
                </div>
            </div>
        </div>
    );
}

const Projects = () => {
    return (
        <div className="py-14 px-28 h-fit w-full border-t-8 border-black">
            <ProjectsHeader />
            <div className="grid grid-cols-2 w-full h-fit">
                <div c></div>
                <Project />
                <Project />
                <Project />
            </div>
        </div>
    );
};

export default Projects;
