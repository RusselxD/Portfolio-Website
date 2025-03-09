import React from "react";

import Project from "./components/Project";

import sampleThumbnail from "../../assets/project-thumbnails/sample.png";

const projects = [
    { thumbnail: sampleThumbnail, title: "Title Nigga" },
    { thumbnail: sampleThumbnail, title: "Title Nigga" },
    { thumbnail: sampleThumbnail, title: "Title Nigga" },
    { thumbnail: sampleThumbnail, title: "Title Nigga" },
    { thumbnail: sampleThumbnail, title: "Title Nigga" },
    { thumbnail: sampleThumbnail, title: "Title Nigga" },
];

function ProjectsHeader() {
    return (
        <div className="w-full border border-red-600 flex justify-center px-16 flex-col">
            <h1 className="font-bold text-4xl mb-3">HTML &amp; CSS Projects</h1>
            <p className="text-lg" style={{ lineHeight: "2rem" }}>
                Here are some of the projects I have worked on for Web Systems and
                Technologies.
            </p>
        </div>
    );
}

const Projects = () => {
    
    return (
        <div className="py-14 px-28 h-fit w-full border-t-8 border-black">
            <div className="grid grid-cols-2 w-full h-fit gap-y-16">
                <ProjectsHeader />
                {projects.map((project, i) => {
                    return <Project properties={project} key={i} i={i + 1} />;
                })}
            </div>
        </div>
    );
};

export default Projects;
