import { jobList } from "../Data/JobsData";
import JobCard from "./JobCard";
import Sort from "./Sort";

const Jobs=()=>{
    return <div className=" px-5 py-5 ">
        <div className="m-2 flex justify-between">
            <div className="font-semibold text-2xl">Recommended Jobs</div>
            <Sort/>
        </div>
        <div className="mt-10 flex flex-wrap gap-4 m-4 justify-between">
        {
            jobList.map((job, index)=><JobCard key={index} {...job}/>)
        }
        </div>
    </div>
}
export default Jobs;