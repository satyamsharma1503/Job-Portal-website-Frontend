import { Divider, Input, RangeSlider } from "@mantine/core";
import { useState } from "react";
import { searchFields } from "../Data/TalentData";
import MultiInput from "../FindJobs/MultiInput";
import { IconUserCircle } from "@tabler/icons-react";

const SearchBar=()=>{
    const [value , setValue]= useState<[number,number]>([1,100]);
    return <div className="flex px-5 py-8 !text-mine-shaft-100 items-center">
        <div className="flex items-center">
            <div className="text-bright-sun-400 bg-mine-shaft-900 rounded-full p-1 mr-2 items-center"><IconUserCircle size={25}/></div>
            <Input className="[&_input]:placeholder-mine-shaft-100 font-semibold" variant="unstyled" size="s" placeholder="Talent Name" />
            <Divider mr="xs" size="xs" orientation="vertical" />
        </div>
        {
            searchFields.map((item,index)=><><div key={index} className="w-1/5"><MultiInput {...item}/></div>
            <Divider mr="xs" size="xs" orientation="vertical" />
            </>)
        }
        <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
        <div className="flex justify-between text-sm">
            <div>Salary</div>
            <div> &#8377;{value[0]} LPA -&#8377;{value[1]} LPA</div>
        </div>
        <RangeSlider color="brightSun.5" size="xs" value={value}
        labelTransitionProps={{
        transition: 'skew-down',
        duration: 150,
        timingFunction: 'linear',
        }}
        onChange={setValue} />
        </div>
    </div>
}
export default SearchBar;
