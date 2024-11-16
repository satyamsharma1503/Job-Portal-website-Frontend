import { ActionIcon, Button, Divider, TagsInput, Textarea } from "@mantine/core";
import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil, IconPlus } from "@tabler/icons-react";
import ExpCard from "./ExpCards";
import CertiCards from "./CertifiCards";
import { skills } from "../Data/JobDescData";
import { useState } from "react";
import SelectInput from "./SelectInput";
import fields from "../Data/Profile";
import ExpInput from "./ExpInput";
import CertiInput from "./CertiInput";
// import { fields } from "../Data/PostJob";
const Profile= (props:any)=>{
    const[skills, setSkills]=useState(['React', 'Spring Boot', 'Java', 'Python', 'Node.js', 'MongoDB', 'Express', 'Django', 'PostgreSQL']);
;
    const [about, setAbout] = useState('As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively.');
    const select =fields
    const [addExp,setAddExp]= useState(false);
    const [addCerti,setAddCerti]= useState(false);
    const [edit,setEdit]= useState([false,false,false,false,false]);
    const handleEdit =(index:any)=>{
        const newEdit =[...edit];
        newEdit[index]=!newEdit[index];
        setEdit(newEdit);
        console.log(edit);
    }
    return <div className="w-3/5 mx-auto">
        <div className="relative">
            <img className="rounded-t-2xl" src="/Profile/banner.jpg"/>
            <img className="w-48 h-48 rounded-full -bottom-1/3 absolute left-3  border-mine-shaft-950 border-8" src="/avatar.png"/>
        </div>
        <div className="px-3 mt-20">
            <div className="flex text-3xl font font-semibold justify-between">{props.name}<ActionIcon onClick={()=>handleEdit(0)} variant="subtle" size="lg" color="brightSun.4" aria-label="Settings">
        {edit[0]?<IconDeviceFloppy className="h-4/5 w-4/5"/>:<IconPencil className="h-4/5 w-4/5" />}
    </ActionIcon></div>

            {
                edit[0]?<><div className="flex flex-col gap-5">
            <div className="flex gap-10 [&>*]:w-1/2"> 
                <SelectInput {...select[0]} />
                <SelectInput {...select[1]} />
                <SelectInput {...select[2]} />
            </div>
            </div></>: <><div className="text-xl flex gap-2 items-center"><IconBriefcase w-5 h-5 stroke={1.5}/>{props.role}</div>
            <div className=" flex gap-1 items-center text-lg text-mine-shaft-400">
                <IconMapPin className="w-5 h-5" stroke={1.5}/>{props.location}
            </div></>
            }
        </div>
        <Divider my="xl"/>
        <div>
            <div className="text-3xl font-semibold mb-3 flex justify-between ">About<ActionIcon onClick={()=>handleEdit(1)} variant="subtle" size="lg" color="brightSun.4" aria-label="Settings">
        {edit[1]?<IconDeviceFloppy className="h-4/5 w-4/5"/>:<IconPencil className="h-4/5 w-4/5" />}
    </ActionIcon></div>
    {
        edit[1]?<><Textarea value={about}  placeholder="Enter about yourself" autosize minRows={5}  onChange={(event) => setAbout(event.currentTarget.value)}/></>:<div className="text-l text-mine-shaft-300 text-justify">
                {props.about}
            </div>
    }
        </div>
        <Divider  my="xl"/>
        <div>
            <div className="text-3xl font-semibold mb-3 flex justify-between">Skills<ActionIcon onClick={()=>handleEdit(2)} variant="subtle" size="lg" color="brightSun.4" aria-label="Settings">
        {edit[2]?<IconDeviceFloppy className="h-4/5 w-4/5"/>:<IconPencil className="h-4/5 w-4/5" />}
    </ActionIcon></div>
    {edit[2]?<><TagsInput placeholder="Add your Skill" autoSave=""  value={skills} onChange={setSkills} splitChars={['','|']} /></>:<><div className="flex flex-wrap gap-4 w-5/6">
                {
                    skills.map((skill:any,index:any)=> <div key={index} className="text-sm font-medium text-bright-sun-400 bg-bright-sun-300 bg-opacity-15 px-3 py-1 rounded-3xl">{skill}</div>)
                }
            </div>
            </>}
        </div>
        <Divider  my="xl"/>
        <div className="px-4 ">
            <div className="text-3xl font-semibold mb-5 flex justify-between">Experence<div className=" flex gap-3"><ActionIcon onClick={()=>setAddExp(true)} variant="subtle" size="lg" color="brightSun.4" aria-label="Settings">
<IconPlus className="h-4/5 w-4/5" />
    </ActionIcon><ActionIcon onClick={()=>handleEdit(3)} variant="subtle" size="lg" color="brightSun.4" aria-label="Settings">
        {edit[3]?<IconDeviceFloppy className="h-4/5 w-4/5"/>:<IconPencil className="h-4/5 w-4/5" />}
    </ActionIcon></div></div>
            <div className="flex flex-col gap-10">
            {
                props.experience.map((exp:any, index:any)=><ExpCard key={index} {...exp}edit={ edit[3]}/>)
            }
            {addExp&&<ExpInput add setEdit ={setAddExp}/>}
            </div>
        </div>
        <Divider  my="xl"/>
        <div className="px-4">
            <div className="text-3xl font-semibold mb-5 flex justify-between">Certification<div className=" flex gap-3"><ActionIcon onClick={()=>setAddCerti(true)} variant="subtle" size="lg" color="brightSun.4" aria-label="Settings">
<IconPlus className="h-4/5 w-4/5" />
    </ActionIcon><ActionIcon onClick={()=>handleEdit(4)} variant="subtle" size="lg" color="brightSun.4" aria-label="Settings">
        {edit[4]?<IconDeviceFloppy className="h-4/5 w-4/5"/>:<IconPencil className="h-4/5 w-4/5" />}
    </ActionIcon></div></div>
            <div className="flex flex-col gap-10">
            {
                props.certifications.map((certi:any, index:any)=><CertiCards edit={edit[4]} key={index} {...certi}/>)
            }
            {
                addCerti&&<CertiInput setEdit={setAddCerti}/>
            }
        </div>
        </div>
    </div>
}
export default Profile;