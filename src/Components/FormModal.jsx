import { CreateContact } from "./CreateContact";
import { CreateEvent } from "./CreateEvent";
import Modal from "react-modal";


export const FormModal = ({openModal,closeModal,type}) => {
   
    Modal.setAppElement('#root')
    return <Modal
    isOpen={openModal}
    onRequestClose={closeModal}
    contentLabel="Example Modal"
  >
     <button className="bg-accent rounded p-1 text-white font-semibold float-right" onClick={closeModal}>Close</button>
    <h1 className="font-semibold text-lg text-center">
      {type === 'createEvent' && 
      <span>Create Event</span>
      }
      {type === 'createContact' && 
      <span>Create Contact</span>
      }
    </h1>
   
    {type === 'createEvent' && 
    <CreateEvent/>
    }
    {type === 'createContact' && 
    <CreateContact/>
    }
  </Modal>
}