import { ViewEvent } from "./ViewEvent"
import { useState } from "react"
export const History = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [viewEventId,setViewEventId] = useState(null);
    function openEvent(eventId) {
        setViewEventId(eventId);
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
      }
    const dummy = [{eventid:'1',contact:'John Doe',description:'Contacted about a booking',lastUpdate:'09/06/2023'}]
        return<div> 
            <ViewEvent modalIsOpen={modalIsOpen} eventid={viewEventId} closeModal={closeModal}/>
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="">
                <th scope="col" className="px-6 py-3">
                   Event #
                </th>
                <th scope="col" className="px-6 py-3">
                    Contact
                </th>
                <th scope="col" className="px-6 py-3">
                    Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Last Updated
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">View</span>
                </th>
            </tr>
        </thead>
        <tbody>
            {dummy.map((item) => {
                return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={item.eventid}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.eventid}
                </th>
                <td className="px-6 py-4">
                    {item.contact}
                </td>
                <td className="px-6 py-4">
                    {item.description}
                </td>
                <td className="px-6 py-4">
                    {item.lastUpdate}
                </td>
                <td className="px-6 py-4 text-right">
                    <button onClick={() => {openEvent(item.eventid)} } className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</button>
                </td>      
                </tr>
            })}

        </tbody>
    </table>
</div>

   
        </div>
}