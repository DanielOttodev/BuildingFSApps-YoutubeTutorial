import { useEffect } from "react";
import Modal from "react-modal";


export const ViewEvent = ({eventid,modalIsOpen,closeModal}) => {
    const event = {eventid:'1',contact:'John Doe',description:'Contacted about a booking',lastUpdate:'09/06/2023'}
    useEffect(() => {
    // Grab the event data
    },[eventid])
    console.log(modalIsOpen)
    Modal.setAppElement('#root')
    return <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    contentLabel="Example Modal"
  
  >
     <button className="bg-accent rounded p-1 text-white font-semibold float-right" onClick={closeModal}>Close</button>
    <h1 className="font-semibold text-lg text-center">Event {eventid}</h1>
    <div>
    <p><span className="font-semibold">Contact:</span> {event.contact}</p>
    <p><span className="font-semibold">Description:</span> {event.description}</p>
    <p><span className="font-semibold">Last Updated:</span> {event.lastUpdate}</p>
    </div>

    
  </Modal>
}