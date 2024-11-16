import { IconBookmark, IconCalendarMonth, IconClockHour3, IconHeart, IconMapPin } from "@tabler/icons-react";
import { Button, Divider, Modal, Text } from '@mantine/core';
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { DateInput, TimeInput } from "@mantine/dates";

const TalentCards=(props:any)=>{
    const [opened, { open, close }] = useDisclosure(false);
    const [TalentCards, setTalentCards] = useState(false);
    const ref = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState<Date | null>(null);
    const handleTalentCards=()=>{
        setTalentCards(!TalentCards);
        window.scroll({top:0, behavior:'smooth'})
    }
    return <div className="bg-mine-shaft-900 p-3 w-96  rounded-xl flex flex-col gap-4 border border-bright-sun-400 hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-3 transition duration-300  ease-in-out !shadow-bright-sun-300 ">
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-md">
                    <img className=" h-10 rounded-full" src={`${props.image}.png`} alt=" "/>
                </div>
                <div>
                    <div className="font-semibold">{props.name}</div>
                    <div className="text-xs text-mine-shaft-300">{props.role} &#x2022;{props.company} Applicants</div>
                </div>
            </div>
            <IconHeart className="text-mine-shaft-200 cursor-pointer"/>
        </div> 
        <div className="flex gap-2">
            {
                props.topSkills.map((skill:any, index:any)=><div key={index} className="p-2 py-1 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-xs">{skill}</div>)
            }
        </div>
            <Text className="!text-xs text-justify !text-mine-shaft-300" lineClamp={3}>
                {props.about}
    </Text>
    <Divider size="xs" color="mineShaft.5"/>
    {
        props.invited?<div className="text-mine-shaft-200 text-sm items-center flex  gap-2">
            <IconCalendarMonth className="w-5 h-5"/>Interview: August 27, 2024 10:00 AM</div>:<div className="flex justify-between">
            <div>
                {props.expectedCtc}<span className="text-mine-shaft-100">/year</span>
            </div>
            <div className="flex gap-1 items-center text-xs text-mine-shaft-400 ">
                <IconMapPin className="w-5 h-5" stroke={1.5}/>
                {props.location}
            </div>
        </div>
    }
        <Divider size="xs" color="mineShaft.7"/>
        <div className="flex [&>*]:w-1/2 [&>*]:p-1">
        {
            !props.invited && <>
            <Link to="/talent-profile">
            <Button onClick={handleTalentCards} color="brightSun.4" fullWidth variant="outline">Profile</Button>
            </Link>
            <div>
            {props.posted?<Button onClick={open} rightSection={<IconCalendarMonth className="w-5 h-5"/>} color="brightSun.4" fullWidth variant="light">Schedule</Button>:<Button color="brightSun.4" fullWidth variant="light">Message</Button>}
            </div>
            </>
        }
        {
            props.invited && <>
            <div> <Button onClick={handleTalentCards} color="brightSun.4" fullWidth variant="outline">Accepted</Button></div>
            <div> <Button onClick={handleTalentCards} color="brightSun.4" fullWidth variant="">Rejected</Button></div>
            </>
        }
            
            <Modal opened={opened} onClose={close} title="Schedule Interview" centered>
            <div className="flex flex-col gap-4 "> 
            <DateInput minDate={new Date()} value={value} onChange={setValue} label="Date input" placeholder="Date input"/>
            <TimeInput label="Time" ref={ref} onClick={() => ref.current?.showPicker()}/>
            <Button color="brightSun.4" fullWidth variant="light">Schedule</Button>
            </div>
            </Modal>
        </div>
    </div>
}
export default TalentCards;