import { ScrollArea } from "@mantine/core";
import { talents } from "../Data/TalentData";
import TalentCards from "../FindTalent/TalentCards";

const RecommendedTalent=()=>{
    return <div>
        <div className="text-xl font-semibold mb-5">Recommended Talent</div>
        <ScrollArea h={1500}>
        <div className="flex flex-col flex-wrap gap-5 mt-10">
            {
            // talents.map((talent,index)=> index<4 &&<TalentCards key={index}{...talent}/> )
            talents.map((talent,index)=><TalentCards key={index}{...talent}/> )
            }
        </div>
            
    </ScrollArea>
    </div>
}
export default RecommendedTalent;