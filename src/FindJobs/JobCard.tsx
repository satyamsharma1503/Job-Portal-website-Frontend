import { IconBookmark, IconClockHour3 } from "@tabler/icons-react";
import { Divider, Text } from '@mantine/core';
import { Link } from "react-router-dom";
import { useState } from "react";

const JobCard=(props:any)=>{
    const [JobCard, setJobCard] = useState(false);
    const handleJobCard=()=>{
        setJobCard(!JobCard);
        window.scroll({top:0, behavior:'smooth'})
    }
    return <Link to="/jobs" onClick={handleJobCard} className="bg-mine-shaft-900 p-5 w-80 justify-between rounded-xl flex flex-col gap-4 border border-bright-sun-400 hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-3 transition duration-300  ease-in-out !shadow-bright-sun-300 ">
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-md">
                    <img className=" h-10" src={`/Icons/${props.company}.png`} alt=" "/>
                </div>
                <div>
                    <div className="font-semibold">{props.jobTitle}</div>
                    <div className="text-xs text-mine-shaft-300">{props.company} &#x2022;{props.applicants} Applicants</div>
                </div>
            </div>
            <IconBookmark className="text-mine-shaft-200 cursor-pointer"/>
        </div> 
        <div className=" flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs cursor-pointer">
            <div>{props.experience}</div>
            <div>{props.jobType}</div>
            <div>{props.location}</div>
        </div>
            <Text className="!text-xs text-justify !text-mine-shaft-300" lineClamp={3}>
                {props.description}
    </Text>
    <Divider size="xs" color="mineShaft.5"/>
        <div className="flex justify-between">
            <div>
                &#8377;{props.package}<span>/hr</span>
            </div>
            <div className="flex gap-1 items-center text-xs text-mine-shaft-400 ">
                <IconClockHour3 className="w-5 h-5" stroke={1.5}/>
                {props.postedDaysAgo} Days ago
            </div>
        </div>
    </Link>
}
export default JobCard;