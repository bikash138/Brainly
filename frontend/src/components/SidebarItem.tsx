import { ReactElement } from "react";


const SidebarItem = ({icon, text} : {
  text:string;
  icon: ReactElement
}) => {
  return (
    <div className="flex text-gray-500 py-2">
      <div className="pr-2 ">{icon}</div>
      <div className="">{text}</div>
    </div>
  )
}

export default SidebarItem