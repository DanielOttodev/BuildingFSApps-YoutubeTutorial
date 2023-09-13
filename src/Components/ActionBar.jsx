export const ActionBar = ({createEvent,setType,createContact}) => {
    return<div className="justify-center flex flex-gap-5">
           
    <button onClick={() => {createContact()}}  className="ml-2 p-2 border shadow hover:bg-sky-800 bg-primary2 rounded-xl text-white  font-semibold">Create Contact</button>
    <button onClick={() => {createEvent()}} className="ml-2 p-2 border shadow hover:bg-sky-800 bg-primary2 rounded-xl text-white  font-semibold">Create Event</button>

    </div>
}