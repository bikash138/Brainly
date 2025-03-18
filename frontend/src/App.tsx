import { useState } from "react"
import Button from "./components/Button"
import Card from "./components/Card"
import CreateContentModal from "./components/CreateContentModal"
import { PlusIcon } from "./icons/PlusIcon"
import { ShareIcon } from "./icons/ShareIcon"
import Sidebar from "./components/Sidebar"


function App() {
  
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Sidebar/>
      {/* Main Content */}
      <div className="p-4 ml-72 min-h-screen bg-slate-100">
        <CreateContentModal open={modalOpen} onClose={()=>setModalOpen(false)}/>
        <div className="flex justify-end gap-4">
          <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon/>}/>
          <Button onClick={()=>setModalOpen(true)} variant="primary" text="Add Content" startIcon={<PlusIcon/>}/>
        </div>
        <div className="flex gap-4">
          <Card type="twitter" title="First Tweet" link="https://x.com/alifcoder/status/1901882446582624679"/>
          <Card type="youtube" title="First Youtube" link="https://www.youtube.com/watch?v=vYelTr1uQmA&t=390s"/>
        </div>
      </div>
    </>
  )
}

export default App
