import { useState } from "react"

export default function Header(): any{
    const [navOptions] : readonly any[] = useState([
        {
            id: 1,
            title: 'Home',
            navLink: '#home',
        },
        {
            id: 2,
            title: 'Services',
            navLink: '#services',
        },
        {
            id: 3,
            title: 'About',
            navLink: '#about',
        },
        {
            id: 4,
            title: 'Skills',
            navLink: '#skills',
        },
        {
            id: 5,
            title: 'Blog',
            navLink: '#blog',
        },
        {
            id: 6,
            title: 'Contact',
            navLink: '#contact',
        },
    ])

    return(
        <div id="home" className="bg-transparent flex items-center justify-between py-8 lg:px-14 px-2 text-white font-Lato">
            <h1 className="text-3xl w-fit">
                Praise C<span className="text-orange">o</span>des
            </h1>

            <ul className="lg:flex hidden">
                {
                    navOptions.map((navOption:any)=>(
                        <li className="mx-6">
                            <a href={navOption.navLink} className="hover:text-orange text-lg ease-in-out cursor-pointer duration-300">
                                {navOption.title}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}