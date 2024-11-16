import { Button, Checkbox, Textarea } from "@mantine/core";
import fields from "../Data/Profile";
import SelectInput from "./SelectInput";
import { useState } from "react";
import { MonthPickerInput } from "@mantine/dates";

const ExpInput=(props:any)=>{
    const select =fields;
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [EndDate, setEndDate] = useState<Date | null>(new Date());
    const [checked, setChecked] = useState(false);

    const [desc, setDesc]=useState("As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process."
)
    return<div className="flex flex-col gap-3">
        <div className="text-lg font-semibold">{props.add?"Add":"Edit"} Experence</div>
            <div className="flex gap-10 [&>*]:w-1/2"> 
                <SelectInput {...select[0]} />
                <SelectInput {...select[1]} />
            </div>
                <SelectInput {...select[2]} />
                <Textarea value={desc} label="Sumarry"  placeholder="Enter Sumarry" autosize minRows={5}  onChange={(event) => setDesc(event.currentTarget.value)}/>
                <div className=" flex gap-10 [&>*]:w-1/2 ">
                    <MonthPickerInput withAsterisk maxDate={EndDate||undefined}	 label="Start Date" placeholder="Pick date"  value={startDate} onChange={setStartDate }/>
                    <MonthPickerInput disabled={checked} withAsterisk minDate={startDate||undefined} maxDate={new Date()} label="End Date" placeholder="Pick date" value={EndDate} onChange={setEndDate }/>
                    </div>
                    <Checkbox checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} label="Currently working here"/>
                        <div className="flex gap-5">
                    <Button onClick={()=>props.setEdit(false)} color="brightSun.4" variant="outline">Save</Button>
        <Button onClick={()=>props.setEdit(false)} color="red.4" variant="light">Cancel</Button>
        </div>
            </div>
            
}
export default ExpInput;