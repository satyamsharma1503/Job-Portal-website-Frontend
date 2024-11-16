import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import JobDesc from "../JobDesc/JobDecription";
import RecommendedJob from "../JobDesc/RecommendedJob";


const JobDescriptionPage = () =>{
    return(
        <div className="min-h-[100vh] bg-mine-shaft-950 p-4">
            <Divider size="xs"/>
            <Link className="my-4 inline-block" to="/find-jobs">
            <Button leftSection={<IconArrowLeft size={20} />} color="brightSun.4"  variant="light">Back</Button>
            </Link>
            <div className="flex mt-4 gap-5 justify-around">
            <JobDesc/>
            <RecommendedJob/>
            </div>
        </div>

    )
}
export default JobDescriptionPage;