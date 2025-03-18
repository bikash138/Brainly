import { CrossIcon } from "../icons/CrossIcon"
import Button from "./Button"
import CreateContentForm from "./CreateContentForm"

//This is Controlled Component where child is giving instruction to parent
const CreateContentModal = ({open, onClose}) => {

return (
    <div>
        {open && 
            <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
                <div className="flex flex-col justify-center">
                    <span
                    className="bg-white opacity-100 rounded-md p-4">
                        <div className="flex justify-end flex-row-reverse">
                            <div className="cursor-pointer" onClick={onClose}>
                                <CrossIcon/>
                            </div>
                            <div>
                                <CreateContentForm placeholder="Title"/>
                                <CreateContentForm placeholder="Link"/>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Button variant="primary" text="Submit"/>
                        </div>
                    </span>
                </div>
            </div>  
        }

    </div>
  )
}

export default CreateContentModal