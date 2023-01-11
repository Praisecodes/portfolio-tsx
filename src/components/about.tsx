import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

export default function About(): any {
    const [socials]: readonly any[] = useState([
        {
            id: 1,
            socialName: "Facebook",
            icon: <FaFacebookF />
        },
        {
            id: 2,
            socialName: "Twitter",
            icon: <FaTwitter />
        },
        {
            id: 3,
            socialName: "LinkedIn",
            icon: <FaLinkedin />
        },

        {
            id: 4,
            socialName: "Instagram",
            icon: <RiInstagramFill />
        },
    ])

    return (
        <div id='about' className="bg-alternate-bg py-12">
            <div className="w-3/5 px-3">
                <div className="flex">
                    {
                        socials.map((social:any)=>(
                            <a className="text-white cursor-pointer hover:text-orange ease-in-out duration-300 text-xl p-3 mx-4 border border-orange rounded-full">
                                {social.icon}
                            </a>
                        ))
                    }
                </div>
            </div>
            <div className="w-2/5 bg-about object-contain"></div>
        </div>
    )
}
