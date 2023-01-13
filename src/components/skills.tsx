import { SiJavascript, SiCss3, SiHtml5, SiPhp, SiTypescript, SiReact, SiGithub } from 'react-icons/si';
import { ImDatabase } from 'react-icons/im';
import { FaGitAlt } from 'react-icons/fa';
import { useState } from 'react';

export default function Skills(): any{
    const [skills]: readonly any[] = useState([
        {
            id: 1,
            icon: <SiHtml5 />,
            title: "HTML5",
            coloring: 'orange',
        },
        {
            id: 2,
            icon: <SiCss3 />,
            title: "CSS3",
            coloring: 'csscolor',
        },
        {
            id: 3,
            icon: <SiJavascript />,
            title: "JavaScript",
            coloring: "jscolor",
        },
        {
            id: 4,
            icon: <SiPhp />,
            title: "PHP",
            coloring: "phpcolor",
        },
        {
            id: 5,
            icon: <ImDatabase />,
            title: "SQL",
            coloring: "sqlcolor",
        },
        {
            id: 6,
            icon: <SiTypescript />,
            title: "TypeScript",
            coloring: "typescriptcolor",
        },
        {
            id: 7,
            icon: <SiReact />,
            title: "React JS",
            coloring: "reactcolor",
        },
        {
            id: 8,
            icon: <FaGitAlt />,
            title: "Git",
            coloring: "gitcolor",
        },
        {
            id: 9,
            icon: <SiGithub />,
            title: "GitHub",
            coloring: "githubcolor",
        },
    ])

    return (
        <div id='skills' className="py-12 bg-main-bg flex flex-col items-center font-Nunito text-white">
            <h1 className="flex mb-1 flex-col items-center font-bold text-2xl after:content-[''] after:bg-orange after:block after:h-1 after:w-1/2 after:rounded-full">
                Skills
            </h1>
            <p>
                Here Are My Skills
            </p><br />
            <p className="hidden text-csscolor text-jscolor text-githubcolor text-gitcolor text-phpcolor text-reactcolor text-sqlcolor text-typescriptcolor">
                something
            </p>
            <div className="flex flex-wrap justify-center items-center">
                {
                    skills.map((skill: any)=>(
                        <div data-aos="fade-right" className="bg-alternate-bg py-6 px-4 lg:w-80 w-full mx-6 my-4 flex text-white font-Nunito items-center justify-between font-bold">
                            <i className={`text-${skill.coloring} text-4xl`}>
                                {skill.icon}
                            </i>
                            <p>
                                {skill.title}
                            </p>
                            <p className="invisible">
                                {skill.percent}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
