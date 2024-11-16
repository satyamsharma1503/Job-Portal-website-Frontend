import { Button, TextInput } from "@mantine/core";
import SelectInput from "./SelectInput";
import fields from "../Data/Profile";
import { useState } from "react";
import { MonthPickerInput } from "@mantine/dates";

const CertiInput=(props:any)=>{
    const select =fields;
    const [issueDate, setIssueDate] = useState<Date | null>(null);
    return<div className="flex flex-col gap-3">
        <div className="text-lg font-semibold">Add Certificate</div>
        <div className="flex gap-10 [&>*]:w-1/2"> 
                <TextInput withAsterisk  label="Title"
    placeholder="Enter Title"/>
                <SelectInput {...select[1]} />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2"> 
                <MonthPickerInput withAsterisk maxDate={new Date()}	 label="Issue Date" placeholder="Pick date"  value={issueDate} onChange={setIssueDate }/>
                <TextInput withAsterisk  label="Certificate ID"
    placeholder="Enter ID "/>
            </div>
            <div className="flex gap-5">
                    <Button onClick={()=>props.setEdit(false)} color="brightSun.4" variant="outline">Save</Button>
        <Button onClick={()=>props.setEdit(false)} color="red.4" variant="light">Cancel</Button>
        </div>
    </div>
}
export  default CertiInput;