import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import Company from "../CompanyProfile/Company";
import SimiliarCompanies from "../CompanyProfile/SimiliarCompanies";
import PostedJob from "../PostedJob/PostedJob";
import PostedJobDesc from "../PostedJob/PostedJobDesc";

const PostedJobPage =()=>{
    const navigate = useNavigate();
    return <div className="min-h-[100vh] bg-mine-shaft-950 p-4">
            <Divider size="xs"/>
                <div className="flex mt-4 gap-4">
                    <PostedJob/>
                    <PostedJobDesc/> 
            </div>
        </div>
}
export default PostedJobPage;