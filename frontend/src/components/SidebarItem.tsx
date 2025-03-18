import { ReactElement } from "react";


const SidebarItem = ({icon, text} : {
  text:string;
  icon: ReactElement
}) => {
  return (
    <div className="flex text-gray-500 py-2 cursor-pointer 
    hover:bg-gray-200 rounded-md max-w-48 pl-4 transition-all duration-100">
      <div className="pr-2 ">{icon}</div>
      <div className="">{text}</div>
    </div>
  )
}

export default SidebarItem