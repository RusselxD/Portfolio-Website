import React from "react";

import Project from "./Project";

import thumbnail1 from "../../../project-folders/Personal Blog/thumbnail.png";
import thumbnail2 from "../../../project-folders/Table/thumbnail.png";

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
        <div className="w-full flex justify-center px-16 flex-col">
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
        <div className={`overflow-y-hidden  px-28 h-fit w-full border-t-8 border-black ${projects.length % 2 !== 0 ? "pb-40" : "pb-14"}`}>
            <div className="grid grid-cols-2 w-full h-fit gap-y-20">
                <ProjectsHeader />
                {projects.map((project, i) => {
                    return <Project properties={project} key={i} i={i + 1} />;
                })}
            </div>
        </div>
    );
};

export default Projects;
