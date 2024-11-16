import { Button, TagsInput } from "@mantine/core";
import { fields } from "../Data/PostJob";
import SelectInput from "./SelectInput";
import TextEditor from "./RichTextEditor";
import { IconArrowLeft } from "@tabler/icons-react";
// import TextEditor from "./RichTextEditor";
const PostJob =()=>{
    const select = fields;
return <div className="w-4/5 mx-auto mt-5">
    <div className="text-2xl font-semibold mb-5" >PostJobs</div>
        <div className="flex flex-col gap-5">
            <div className="flex gap-10 [&>*]:w-1/2"> 
                <SelectInput {...select[0]} />
                <SelectInput {...select[1]} />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2"> 
                <SelectInput {...select[2]} />
                <SelectInput {...select[3]} />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2"> 
                <SelectInput {...select[4]} />
                <SelectInput {...select[5]} />
            </div>
            <TagsInput withAsterisk label="Skills" placeholder="Enter skills" clearable  acceptValueOnBlur splitChars={[',', ' ', '|']}/>
            <div className="[&_button[data-active='true']]:!text-bright-sun-400 bg-mine-shaft-900">
                <div className="text-2xl font-bold">Job Description</div>
                <TextEditor/>
                </div>
        </div>
                <div className="flex gap-4 mt-5" >
                <Button  color="brightSun.4"  variant="light">Public Job</Button>
                <Button color="brightSun.4"  variant="outline">Save as Draft</Button>
                </div>
    </div>
}
export default PostJob;