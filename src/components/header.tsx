import { useState } from "react"

export default function Header(): any{
    const [navOptions] : readonly any[] = useState([
        {
            id: 1,
            title: 'Home',
        },
        {
            id: 2,
            title: 'Services',
        },
        {
            id: 3,
            title: 'About',
        },
        {
            id: 4,
            title: 'Skills',
        },
        {
            id: 5,
            title: 'Blog',
        },
        {
            id: 6,
            title: 'Contact',
        },
    ])

    return(
        <div className="bg-main-bg flex items-center py-8 lg:px-14 px-2 text-white">
            <h1 className="text-2xl w-fit">
                Praise C<span className="text-orange">o</span>des
            </h1>

            <ul className="flex">
                {
                    navOptions.map((navOption:any)=>(
                        <li className="mx-3">
                            <a href="">
                                {navOption.title}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}