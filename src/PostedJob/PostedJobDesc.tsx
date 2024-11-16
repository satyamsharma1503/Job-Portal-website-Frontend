import { Badge, Tabs } from "@mantine/core";
import AboutComp from "../CompanyProfile/AboutComp";
import CompanyEmployees from "../CompanyProfile/CompanyEmployees";
import CompanyJobs from "../CompanyProfile/CompanyJobs";
import JobDesc from "../JobDesc/JobDecription";
import { talents } from "../Data/TalentData";
import TalentCards from "../FindTalent/TalentCards";

const PostedJobDesc=()=>{
    return <div className="mt-5 w-3/4 px-5">
                <div className="text-2xl font-semibold flex items-center " >Software Engineer<Badge ml="sm" variant="light" color="brightSun.4" size="sm">Badge</Badge>
</div>
<div className="font-medium text-mine-shaft-400 mb-5">New York,United State</div>
<div>
            <Tabs variant="outline" radius="lg" defaultValue="overview">
    <Tabs.List  className="[&_button]:!text-xl font-semibold [&_button[data-active='true']]:text-bright-sun-400">
        <Tabs.Tab value="overview">Overview</Tabs.Tab>
        <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
        <Tabs.Tab value="invited">Invited</Tabs.Tab>
    </Tabs.List>

    <Tabs.Panel value="overview" className="[&>div]:w-full mt-2"><JobDesc edit/></Tabs.Panel>
    <Tabs.Panel value="applicants">
        <div className="mt-10  flex flex-wrap gap-5 justify-around">
        {
            talents.map((talent, index)=>index<4 &&<TalentCards key={index} {...talent} posted/>)}
                </div></Tabs.Panel>
    <Tabs.Panel value="invited">
        <div className="mt-10  flex flex-wrap gap-5 justify-around">
        {
        talents.map((talent, index)=>index<4 &&<TalentCards key={index} {...talent} invited/>)
        }
            </div>
    </Tabs.Panel>
    </Tabs>
        </div>
    </div>
}
export default PostedJobDesc;