import { ContactList } from "../Components/ContactList"
import { ActionBar } from "../Components/ActionBar"
import { History } from "../Components/History"
import { useState } from "react";
import { FormModal } from "../Components/FormModal";
export default function Home() {
    const [openModal, setOpenModal] = useState(false); 
    const [type,setType] = useState(null)

    function createEvent() {
        setType('createEvent');
        setOpenModal(true);
    }
    function createContact() {
        setType('createContact');
        setOpenModal(true);
    }
    function closeModal() {
        setOpenModal(false);
      }
    return <div className="p-5">
        <FormModal type={type} closeModal={closeModal} openModal={openModal} />
        <ActionBar createContact={createContact} createEvent={createEvent} />
        <div className="grid grid-cols-5 py-2 my-2 gap-7">
            <div className="lg:col-span-2 md:col-span-5 col-span-5  ">
            <ContactList  />
            </div>
        <div className="lg:col-span-3 md:col-span-5 col-span-5">
        <History className="col-span-2"/>
        </div>
        </div>
        <div>
     

    </div>
    </div>
}