import { ActionIcon } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";

const CertiCards =(props:any)=>{
    return <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-md">
                    <img className=" h-10" src={`/Icons/${props.issuer}.png`} alt=" "/>
                </div>
                <div>
                    <div className="font-semibold">{props.name}</div>
                    <div className="text-sm text-mine-shaft-300">Google </div>
                </div>
            </div>
            <div className="flex items-center gap-2">
            <div className="flex flex-col items-end">
                <div className="text-sm text-mine-shaft-300">{props.issueDate}</div>
                <div className="text-sm text-mine-shaft-300">{props.certificateId}</div>
            </div>
           {props.edit&& <ActionIcon  size="lg" color="red.5  " aria-label="Settings">
        <IconTrash className="h-4/5 w-4/5" />
    </ActionIcon>}
            </div>
        </div> 
}
export default CertiCards;