import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Profile from "../TalentProfile/Profile";
import { profile} from "../Data/TalentData";
import RecommendedTalent from "../TalentProfile/RecommendedTalent";


const TalentProfilePage = () =>{
    return(
        <div className="min-h-[100vh] bg-mine-shaft-950 p-4">
            <Divider size="xs"/>
            <Link className="my-4 inline-block" to="/find-talent">
            <Button leftSection={<IconArrowLeft size={20} />} color="brightSun.4"  variant="light">Profile</Button>
            </Link>
            <Divider size="xs"/>
            <div className="flex mt-4">
            <Profile {...profile}/>
            <RecommendedTalent/>
            </div>
        </div>

    )
}
export default TalentProfilePage;