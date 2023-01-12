import { useState } from "react";
import { CgWebsite } from 'react-icons/cg';
import { SiAntdesign, SiJirasoftware } from "react-icons/si";

export default function Services(): any{
    const [services]: readonly any[] = useState([
        {
            id: 1,
            icon: <CgWebsite />,
            title: "Web Development",
            writeUp: "",
        },
        {
            id: 2,
            icon: <SiAntdesign />,
            title: "Web Design",
            writeUp: "",
        },
        {
            id: 3,
            icon: <SiJirasoftware />,
            title: "Software Development",
            writeUp: "",
        },
    ])

    return (
        <div id="services" className="bg-transparent lg:px-20 py-12 px-2">
            <div className="flex lg:flex-row flex-col items-center lg:justify-start justify-center">
                <div className="text-white lg:w-2/5 font-Nunito text-center lg:text-left">
                    <p className="text-sm text-orange">
                        SERVICES
                    </p>
                    <h1 className="text-2xl w-full flex flex-col lg:items-start items-center py-1 after:content-[''] after:bg-orange after:my-2 after:h-1 after:rounded-full after:w-16 after:block font-bold">
                        My Services
                    </h1>
                </div>
                <div className="lg:w-3/5 text-white font-Nunito">
                    <p>
                        {/* I'm a frontend developer with 2 years+ experience in building responsive and 
                        user-friendly websites. I have a strong background in HTML, CSS, JavaScript and 
                        TypeScript, and I'm always looking to stay up-to-date on the latest technologies and 
                        best practices.<br />
                        In my spare time, I enjoy tinkering with new frameworks and
                        libraries and sharing my knowledge with the community through
                        open source contributions. I'm passionate about creating
                        engaging and intuitive user experiences, and I'm always looking
                        for new challenges and opportunities to learn and grow as a
                        developer. */}
                        I'm a frontend developer with 2 years+ experience in building responsive and 
                        user-friendly websites. I have a strong background in HTML, CSS, JavaScript and 
                        TypeScript, and I'm always looking to stay up-to-date on the latest technologies and 
                        best practices.
                    </p>
                </div>
            </div> <br /><br /><br />
            <div className="flex justify-center items-center flex-wrap">
                {
                    services.map((service:any)=>(
                        <div className="lg:w-80 w-full text-white font-Nunito px-3 py-5 rounded-sm bg-orange mx-6 my-4">
                            <i className="text-3xl">
                                {service.icon}
                            </i>
                            <h1 className="text-xl mt-4 font-bold">
                                {service.title}
                            </h1>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}