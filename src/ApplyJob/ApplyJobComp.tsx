import { Button, Divider, FileInput, LoadingOverlay, NumberInput, Textarea, TextInput } from "@mantine/core";
import { IconArrowLeft, IconBookmark, IconCheck, IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { Notification, rem } from '@mantine/core';
import { useNavigate } from "react-router-dom";
import { isFixed } from "@mantine/hooks/lib/use-headroom/use-headroom";


const ApplyJobComp =()=>{
    const [preview, setPreview] = useState(false);
    const handlePreview =()=>{
        setPreview(!preview);
        window.scroll({top:0, behavior:'smooth'})
    }
    const [submit, setSubmit] = useState(false);
    const [sec, setSec] = useState(5);
    const navigate = useNavigate();
    const handleSubmit =()=>{
        setSubmit(true);
        let x=5;
        setInterval(()=>{
            x--;
            setSec(x);
            if(x==0)navigate('/find-jobs');
        },1000)
    }
    return <><div className="w-2/3 mx-auto">
        <LoadingOverlay className="!fixed"
        visible={submit}
        zIndex={1000}
        overlayProps={{ radius: 'sm', blur: 2 }}
        loaderProps={{ color: 'brightSun.4', type: 'bars' }}
        />
        <div className="flex justify-between">
            <div className="flex gap-3 items-center">
                <div className="p-3 bg-mine-shaft-800 rounded-xl">
                    <img className=" h-14" src={`/Icons/Google.png`} alt=" "/>
                </div>
                <div>
                    <div className="font-semibold text-2xl">Software Engineer</div>
                    <div className="text-lg text-mine-shaft-300">Google &#x2022; 3 days ago &#x2022; 5467 Applicants</div>
                </div>
            </div>
        </div> 
        <Divider my="xl"/>
        <div className="text-xl font-semibold mb-5">Submit your application</div>
        <div className="flex flex-col gap-5">
            <div className="flex gap-5 [&>*]:w-1/2">
            <TextInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":" "}`} label="Full Name" withAsterisk placeholder="Enter Name " />
            <TextInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":" "}`} label="Email-id" withAsterisk placeholder="Enter Email-id" />
            </div>

            <div className="flex gap-5 [&>*]:w-1/2">
            <NumberInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":" "}`} label="Phone NUmber" withAsterisk placeholder="Enter Phone number" hideControls clampBehavior="strict"  min={0}
            max={9999999999} />
            <TextInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":" "}`} label="Personal Website" withAsterisk placeholder="Enter url" />
            </div>
            <FileInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":" "}`}  withAsterisk leftSection={<IconPaperclip stroke={1.5}/>} label="Attach Your CV" placeholder="Your CV"/>
            <Textarea readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":" "}`} withAsterisk placeholder="Type something about yourself..." label="Cover Letter" autosize minRows={4} />
            {!preview && <Button onClick={handlePreview} color="brightSun.4" variant="light">Preview</Button>}
            {
                preview &&<div className=" flex gap-5 [&>*]:w-1/2">
                    <Button fullWidth onClick={handlePreview} color="brightSun.4" variant="outline">Edit</Button>
                    <Button fullWidth onClick={handleSubmit} color="brightSun.4" variant="light">Submit</Button>
                </div> 
            }
        </div>
    </div>
    <Notification className={`!border-bright-sun-400 !fixed  transition duration-500 ease-in-out top-0 mt-5 left-[35%] z-[1001] ${submit ? "translate-y-1":"-translate-y-24"} `} icon={ <IconCheck style={{ width: rem(20), height: rem(20)}} />} color="red" withBorder title="Everything Submited" withCloseButton={false}>
        Redirecting to Find job {sec} seconds...
    </Notification>
    </>
}
export default ApplyJobComp;