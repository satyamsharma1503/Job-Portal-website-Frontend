
import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
    const links = [
        { name: "Home", url: "find-home" },
        { name: "Find Job", url: "find-jobs" },
        { name: "Find Talent", url: "find-talent" },
        { name: "Upload Job", url: "upload-jobs" },
        { name: "Posted Job", url: "posted-job" },
        { name: "Job History", url: "job-history" },
        { name: "SignUp", url: "signup" },
    ]

    const location = useLocation();
    return <div className="flex gap-5 h-full items-center text-mine-shaft-300">
        {links.map((link, index) => (
            <div
            
                className={`${location.pathname =="/"+link.url?"border-bright-sun-400  text-bright-sun-400 border-t-[3px] flex" : "border-transparent"} h-full flex items-center`}
            >
                <Link  key={index} to={link.url}>{link.name}</Link>
            </div>
        ))}


    </div>

}
export default NavLinks;