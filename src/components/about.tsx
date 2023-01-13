import Resume from '../assets/files/Okeypraise Junior Resume.pdf';

export default function About(): any{
    return (
        <div data-aos="zoom-in-up" id="about" className="py-12 flex flex-col lg:items-start items-center bg-alternate-bg lg:px-20 px-5 text-white font-Nunito">
            <h1 className="lg:w-fit flex lg:items-start items-center flex-col after:content-[''] after:w-1/2 after:mt-1 font-bold after:bg-orange after:block after:h-1 after:rounded-full text-2xl">
                About Me
            </h1><br /><br />
            <div className="flex lg:flex-row items-center flex-col w-full">
                <div className="lg:w-1/4 w-full h-80 bg-other object-cover bg-no-repeat bg-center"></div>
                <div className="lg:px-12 w-full mt-6 lg:w-3/4">
                    <h1 className="text-xl font-bold">
                        Hi There
                    </h1><br />
                    <p>
                        I'm a frontend developer with 2 years+ experience in building responsive and 
                        user-friendly websites. I have a strong background in HTML, CSS, JavaScript and 
                        TypeScript, and I'm always looking to stay up-to-date on the latest technologies and 
                        best practices.<br />
                        In my spare time, I enjoy tinkering with new frameworks and
                        libraries and sharing my knowledge with the community through
                        open source contributions. I'm passionate about creating
                        engaging and intuitive user experiences, and I'm always looking
                        for new challenges and opportunities to learn and grow as a
                        developer.
                    </p><br /><br />

                    <a href={Resume} download={"Okeypraise Junior Resume"} className="border border-orange px-7 py-3 hover:bg-orange duration-300 ease-in-out rounded-full">
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    )
}