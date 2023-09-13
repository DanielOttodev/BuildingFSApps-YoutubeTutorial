import { useState } from "react"
export const CreateContact = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')

    function saveEvent(){
        let eventData = {
        name:name,
        email:email,
        phone:phone
        }
        console.log(eventData);
    }
    return  <div>
    <div className="my-2">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <input onChange={(e) => {setName(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg font-semibold focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
    </div>
    <div className="my-2">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
    <input onChange={(e) => {setEmail(e.target.value)}}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg font-semibold focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john@mail.com" required/>
    </div>
    <div className="my-2">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
    <textarea onChange={(e) => {setPhone(e.target.value)}} type="notepad" maxLength={280}  className="font-semibold bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0411 234 567" required/>
    </div>
   <button onClick={() => {saveEvent()}} className="p-2 float-right  w-full md:w-32 rounded hover:bg-primary2 bg-primary text-white font-semibold">Save Contact</button>
    </div>

}