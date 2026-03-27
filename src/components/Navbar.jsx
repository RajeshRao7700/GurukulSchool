import { Link } from "react-router-dom";
const Navbar =() =>{
    return (
        <div className="bg-white">
        <div className="w-full text-sm h-32 ">
            <div className="flex d-flex items-center text-white justify-between bg-blue-900 p-2">
                <div className="flex d-flex gap-2">
                <h4 className="ml-5">+91-9977888146</h4>      
                <h4>info@VkvSchool.edu</h4>
                </div>
                <h4 className="mr-10">Excellence in Education Since 2024</h4>
            </div>
            <div className='flex d-flex items-center justify-between'>
                <div className="flex d-flex pt-2 ml-20">
                    <div className="h-full">
                    <img className='w-20 h-20 ml-5' src="./src/assets/vkv_logo.jfif" alt="" />
                    </div>
                    <div className="mt-3 ml-2">
                    <h1 className="text-4xl text-blue-900 font-bold">VKV School</h1>
                    <h1 className='text-gray-700 font-semibold text-sm ml-3'>Best School in Assam</h1>
                    </div>
                </div>
                <div></div>
                <div className="flex d-flex gap-2 items-start mr-10 text-gray-700 font-bold text-md ">
                    <Link to="/" className="px-4 py-2 rounded-xl  hover:bg-gray-400 transition">Home</Link>
                    <Link to="/about" className="px-4 py-2 rounded-xl hover:bg-gray-400 transition">About</Link>
                    <Link to="/academics" className="px-4 py-2 rounded-xl hover:bg-gray-400 transition">Academics</Link>
                    <Link to="/admission" className="px-4 py-2 rounded-xl hover:bg-gray-400 transition">Admission</Link>
                    <Link to="/facilities" className="px-4 py-2 rounded-xl hover:bg-gray-400 transition">Facilities</Link>
                    <Link to="/gallery" className="px-4 py-2 rounded-xl hover:bg-gray-400 transition">Gallery</Link>
                    <Link to="/contactus" className="px-4 py-2 rounded-xl hover:bg-gray-400 transition">Contact Us</Link>
                    
                </div>
            </div>
        </div>
        </div>
    )
}

export default Navbar;