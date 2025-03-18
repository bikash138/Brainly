import { DocumentIcon } from "../icons/DocumentIcon";
import { LinkIcon } from "../icons/LinkIcon";
import { TwitterIcon } from "../icons/TwitterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon"
import SidebarItem from "./SidebarItem"
import { LuBrain } from "react-icons/lu";


const Sidebar = () => {
  return (
    <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 border-[2px] pl-6">
      <div className="flex text-4xl pt-4 items-center gap-x-2">
        <LuBrain className="text-purple-800"/>
        Brainly
      </div>
        <div className="pt-4">
          <SidebarItem text="Twitter" icon={<TwitterIcon/>}/>
          <SidebarItem text="Youtube" icon={<YoutubeIcon/>}/>
          <SidebarItem text="Links" icon={<LinkIcon/>}/>
          <SidebarItem text="Document" icon={<DocumentIcon/>}/>
        </div>
    </div>
  )
}

export default Sidebar