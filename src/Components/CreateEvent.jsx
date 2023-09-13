import { useState } from "react"
export const CreateEvent = () => {
    const [contact,setContact] = useState('')
    const [description,setDescription] = useState('')
    const [summary,setSummary] = useState('')

    function saveEvent(){
        let eventData = {
        contact:contact,
        description:description,
        summary:summary
        }
    }
    return  <div>
    <div className="my-2">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact</label>
    <select onChange={(e) => {setContact(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg font-semibold focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required>
    <option value="John">John Doe</option>
    <option value="John">Mike Malthouse </option>
    </select>
    </div>
    <div className="my-2">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
    <input onChange={(e) => {setDescription(e.target.value)}}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg font-semibold focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="E.g Booking #123, Phone call made..." required/>
    </div>
    <div className="my-2">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Summary</label>
    <textarea onChange={(e) => {setSummary(e.target.value)}} type="notepad" maxLength={280}  className="font-semibold bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Additional details to capture" required/>
    </div>
   <button onClick={() => {saveEvent()}} className="p-2 float-right  w-full md:w-32 rounded hover:bg-primary2 bg-primary text-white font-semibold">Save Event</button>
    </div>

}