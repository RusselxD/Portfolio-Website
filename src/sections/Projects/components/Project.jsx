import React from "react";

const Project = ({ i, properties }) => {
    const { thumbnail, title } = properties;

    useEffect(() => {
        const handleScroll = () => {

          const project = document.getElementById(`project-${i}`);
          if(project.getBoundingClientRect().top < window.innerHeight){
               
          }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll");
    }, []);

    return (
        <div className="w-full border border-violet-900 flex justify-center items-center" id={`project-${i}`}>
            <div
                className={`relative w-4/5 border-[3px] border-black  ${
                    i % 2 !== 0 ? "translate-y-28" : ""
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
            </div>
        </div>
    );
};

export default Project;
