import {MdEmail,MdPhone} from 'react-icons/md'
export const ContactList = () => {
    const dummy = [{name:"John Doe",email:"doe@gmail.com",phone:'+61 4589 1237'},{name:"Mike Malthouse",email:"malthouse@gmail.com",phone:"+61 4363 8367" }]
    return <div className="mx-auto">
        <ul>
        {dummy.map((item) => {
            return <li className='lg:w-92 sm:w-full mx-auto bg-white mb-5 hover:bg-gray-100 hover:shadow transition-all 0.45s text-xl' key={item.email}>
                <div className='shadow p-3 '>
                <p>{item.name}</p> 
                <div className='mt-2 flex gap-5 justify-between '>
                    <p className='text-gray-400'> <MdEmail className='inline ' size={24}/> {item.email}</p>
                    <p className='text-gray-400'> <MdPhone className='inline' size={24}/>{item.phone}</p>
                </div>
                </div>
            
            </li>
        })}
        </ul>
    </div>
}