import { ScrollArea } from "@mantine/core";
import { jobList } from "../Data/JobsData";
import JobCard from "../FindJobs/JobCard";

const RecommendedJob = ()=>{
    return <div className="">
        <div className="text-xl font-semibold mb-5 ">Recommended Job</div>
        <ScrollArea h={1300}>
        <div className="flex flex-col flex-wrap gap-1">
            {
            jobList.map((jobs:any,index)=><JobCard key={index}{...jobs}/> )
            }
        </div>
    </ScrollArea>
    </div>
}
export default RecommendedJob;