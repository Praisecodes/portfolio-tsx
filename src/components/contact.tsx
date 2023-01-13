import { useState } from "react"

export default function Contact():any{
    const [fullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [sending, setSending] = useState<boolean>(false);

    const sendMessage = ():void => {
        setSending(true);
        fetch(`https://portfoliopraise.000webhostapp.com/sendemail.php?message=${message}&&name=${fullName}&&email=${email}`)
        .then(res=>res.json())
        .then((data)=>{
            setSending(false);
        })
    }

    return (
        <div id="contact" className="py-12 px-3 bg-alternate-bg flex flex-col items-center font-Nunito text-white">
            <h1 className="flex flex-col items-center after:content-[''] after:bg-orange after:h-1 after:w-1/2 w-fit after:block text-2xl after:rounded-full font-bold">
                Contact Me
            </h1><br /><br />

            <form className="lg:w-2/5 w-full flex flex-col">
                <input 
                    type="text" 
                    className="w-full bg-main-bg text-base p-3 rounded-sm outline-none text-white font-Nunito"
                    placeholder="Enter Full Name"
                    onChange={(e)=>{setFullName(e.target.value)}}
                 /> <br />
                 <input 
                    type="email" 
                    className="w-full bg-main-bg text-base p-3 rounded-sm outline-none text-white font-Nunito"
                    placeholder="Enter Your Email"
                    onChange={(e)=>{setEmail(e.target.value)}}
                 /> <br />
                 <textarea 
                    className="w-full bg-main-bg text-base p-3 h-48 rounded-sm outline-none text-white font-Nunito"
                    placeholder="Type Your Message"
                    onChange={(e)=>{setMessage(e.target.value)}}
                 ></textarea>
                 <button type="submit" className="self-end mt-2 rounded-sm text-base bg-orange text-white font-Nunito py-3 px-16">
                    {(sending)?'Sending...':'Send'}
                 </button>
            </form>
        </div>
    )
}