import { talents } from "../Data/TalentData";
import Sort from "../FindJobs/Sort";
import TalentCards from "./TalentCards";

const Talent=()=>{
    return <div className="px-5 py-5 m-2">
        <div className=" mt-5 flex justify-between">
            <div className="font-semibold text-2xl">Talents</div>
            <Sort/>
        </div>
        <div className="mt-10  flex flex-wrap gap-5 m-10 justify-between">
        {
            talents.map((talent, index)=><TalentCards key={index} {...talent}/>)
        }
        </div>
    </div>
}
export default Talent;