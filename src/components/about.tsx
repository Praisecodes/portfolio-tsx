import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

export default function About(): any {
    const [socials]: readonly any[] = useState([
        {
            id: 1,
            socialName: "Facebook",
            icon: <FaFacebookF />,
        },
        {
            id: 2,
            socialName: "Twitter",
            icon: <FaTwitter />,
        },
        {
            id: 3,
            socialName: "LinkedIn",
            icon: <FaLinkedin />,
        },

        {
            id: 4,
            socialName: "Instagram",
            icon: <RiInstagramFill />,
        },
    ])

    return (
        <div id='about' className="bg-alternate-bg flex items-center justify-center flex-wrap lg:flex-row flex-col">
            <div className="lg:w-3/5 lg:px-6 px-1 py-12">
                <div className="flex">
                    {
                        socials.map((social:any)=>(
                            <a className="text-white cursor-pointer hover:text-orange ease-in-out duration-300 lg:text-xl text-base lg:p-3 lg:mx-4 mx-2 p-2 border border-orange rounded-full">
                                {social.icon}
                            </a>
                        ))
                    }
                </div>
                <h1 className="lg:mx-4 mx-2 py-6 text-white font-Nunito lg:text-6xl text-3xl font-bold">
                    I am Okeypraise Junior
                </h1>
                <p className="text-white lg:mx-4 mx-2 py-2">
                    Frontend Developer | Mobile App Developer | React JS | React Native | TailwindCSS
                </p>
                <button className="border border-orange rounded-full px-6 bg-transparent hover:bg-orange ease-in-out duration-300 py-3 my-3 text-white font-Lato lg:mx-4 mx-2">
                    Buy Me A Coffee
                </button>
            </div>
            <div className="lg:w-2/5 bg-about object-cover h-80 bg-center bg-no-repeat"></div>
        </div>
    )
}
