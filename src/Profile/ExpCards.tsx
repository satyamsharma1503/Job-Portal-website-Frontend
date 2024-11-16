import { Button } from "@mantine/core";
import { useState } from "react";
import ExpInput from "./ExpInput";

const ExpCard =(props:any)=>{
    const[edit , setEdit]= useState(false);
    return !edit?<div className="flex flex-col gap-2">
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-md">
                    <img className=" h-10" src={`/Icons/${props.company}.png`} alt=" "/>
                </div>
                <div>
                    <div className="font-semibold">{props.title}</div>
                    <div className="text-sm text-mine-shaft-300">{props.company} &#x2022; {props.location}</div>
                </div>
            </div>
            <div className="text-sm text-mine-shaft-300 flex flex-col gap-1">
                <div>{props.startDate}</div>
                <div>{props.endDate}</div>
            </div>
        </div> 
        <div className="text-sm text-mine-shaft-300 text-justify">{props.description}</div>
        {props.edit&&<div className="flex gap-3">
        <Button onClick={()=>setEdit(true)} color="brightSun.4" variant="outline">Edit</Button>
        <Button color="red.4" variant="light">Delete</Button>
        </div>
}
        </div>:<ExpInput setEdit={setEdit}/>
}
export default ExpCard;