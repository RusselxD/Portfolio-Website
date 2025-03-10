import React from "react";

import Project from "./Project";

import thumbnail1 from "/public/project-folders/Personal Blog/thumbnail.png";
import thumbnail2 from "/public/project-folders/Table/thumbnail.png";

const projects = [
    {
        thumbnail: thumbnail1,
        title: "Personal Blog",
        link: "/project-folders/Personal Blog/index.html",
    },
    {
        thumbnail: thumbnail2,
        title: "HTML Tables",
        link: "/project-folders/Table/1.html",
    },
    {
        thumbnail: thumbnail1,
        title: "Personal Blog",
        link: "/project-folders/Personal Blog/index.html",
    },
    {
        thumbnail: thumbnail2,
        title: "HTML Tables",
        link: "/project-folders/Table/1.html",
    },
    {
        thumbnail: thumbnail1,
        title: "Personal Blog",
        link: "/project-folders/Personal Blog/index.html",
    },
    {
        thumbnail: thumbnail2,
        title: "HTML Tables",
        link: "/project-folders/Table/1.html",
    },
    {
        thumbnail: thumbnail1,
        title: "Personal Blog",
        link: "/project-folders/Personal Blog/index.html",
    },
];

function ProjectsHeader() {
    return (
        <div className="w-full flex justify-center flex-col">
            <h1 className="font-bold text-3xl md:text-4xl mb-3 md:leading-[3.2rem]">
                <span style={{ color: "rgb(255, 87, 51)" }}>HTML</span> &amp;{" "}
                <span style={{ color: "rgb(59,178,224)" }}>CSS</span> Projects
            </h1>
            <p className="md:leading-9 lg:leading-10 text-base md:text-lg">
                Here are some of the projects I have worked on for Web Systems and
                Technologies.
            </p>
        </div>
    );
}

const Projects = () => {
    return (
        <div
            className={`overflow-y-hidden px-3 md:px-8 lg:px-28 h-fit w-full border-t-4 pt-10  border-black ${
                projects.length % 2 !== 0 ? "pb-40" : "pb-14"
            }`}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 w-full h-fit gap-y-12 md:gap-y-20">
                <ProjectsHeader />
                {projects.map((project, i) => {
                    return <Project properties={project} key={i} i={i + 1} />;
                })}
            </div>
        </div>
    );
};

export default Projects;
