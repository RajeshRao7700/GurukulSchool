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
                <div className="flex d-flex gap-3 items-start mr-20 text-gray-700 font-bold text-lg ">
                    <button className="px-4 py-2 rounded-xl  hover:bg-gray-400 transition">Home</button>
                    <button className="px-4 py-2 rounded-xl hover:bg-gray-400 transition">About</button>
                    <button className="px-4 py-2 rounded-xl hover:bg-gray-400 transition">Services</button>
                    <button className="px-4 py-2 rounded-xl hover:bg-gray-400 transition">Contact</button>
                    <button className="px-4 py-2 rounded-xl hover:bg-gray-400 transition">Login</button>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl hover:bg-blue-100">Register</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Navbar;