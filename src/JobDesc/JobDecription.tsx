import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconAdjustments, IconBookmark, IconMapPin } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { card, desc, skills } from "../Data/JobDescData";
//@ts-ignore
import DOMPurify from 'dompurify'
import { useState } from "react";
const JobDesc=(props:any)=>{
const [JobDesc, setJobDesc] = useState(false);
    const handleTalentCards=()=>{
        setJobDesc(!JobDesc);
        window.scroll({top:0, behavior:'smooth'})
    }

    const data = DOMPurify.sanitize(desc) ;
    return <div className="w-2/3">
        <div className="flex justify-between">
            <div className="flex gap-3 items-center">
                <div className="p-3 bg-mine-shaft-800 rounded-xl">
                    <img className=" h-14" src={`/Icons/Google.png`} alt=" "/>
                </div>
                <div>
                    <div className="font-semibold text-2xl">Software Engineer</div>
                    <div className="text-lg text-mine-shaft-300">Google &#x2022; 3 days ago &#x2022; 5467 Applicants</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
            <Link to="/apply-jobs">
            <Button  color="brightSun.4"  variant="light">{props.edit?"Edit":"Apply"}</Button>
            </Link>
            {props.edit?<Button  color="red.5" size="sm" variant="outline">Delete</Button>:<IconBookmark className="text-bright-sun-400 cursor-pointer"/>}
            </div>
        </div> 
        <Divider my="xl"/>
        <div className="flex justify-between">
            {
                card.map((items:any, index:any)=> <div key={index} className=" flex flex-col items-center">
            <ActionIcon color="brightSun.4" className="!h-12 !w-12" variant="light" radius="xl" aria-label="Settings">
        <items.icon className="w-4/5 h-4/5" stroke={1.5} />
        </ActionIcon>
        <div className="text-sm text-mine-shaft-300 ">{items.name}</div>
        <div className="font-semibold">{items.value}</div>
        </div>)
            } 
        </div>
        <Divider my="xl"/>
        <div>
            <div className="text-xl font-semibold mb-5">Required Skills</div>
            <div className="flex flex-wrap gap-3">
                {
                    skills.map((item:any, index:number)=><ActionIcon key={index} color="brightSun.4" className="!h-fit font-medium !w-fit !text-sm" variant="light" p="xs" radius="xl" aria-label="Settings">
                    {item}
        </ActionIcon>)
                }
            </div>
            <Divider my="xl"/>
            <div className="[&_li]:marker:text-bright-sun-400 [&_li]:mb-1 [&_h4]:text-xl [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_p]:text-justify [&_*]:text-mine-shaft-300 " 
            dangerouslySetInnerHTML={{__html:data}}></div>
                <Divider my="xl"/>
                <div>
                    <div className="text-xl font-semibold mb-5">About Company</div>
                    <div className="flex justify-between mb-3">
            <div className="flex gap-3 items-center">
                <div className="p-3 bg-mine-shaft-800 rounded-xl">
                    <img className=" h-7" src={`/Icons/Google.png`} alt=" "/>
                </div>
                <div className="flex flex-col ">
                    <div className="font-semibold text-lg">Google</div>
                    <div className="text-mine-shaft-300">10K+ Employees</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
            <Link to="/Company">
            <Button onClick={handleTalentCards}  color="brightSun.4"  variant="light">Company Page</Button>
            </Link>
            </div>
            </div>
            <div className="text-mine-shaft-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi autem animi eius hic, possimus recusandae aspernatur eos maiores obcaecati qui praesentium, rem suscipit, a tempora itaque cupiditate expedita sit cum unde? Fuga, culpa. Quia commodi assumenda facilis esse nisi ipsam?</div>
        </div> 
            </div>
        </div>
}
export default JobDesc;