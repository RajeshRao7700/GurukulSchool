import { Link } from "react-router-dom";

const Footer = () =>{
    return (
        <div className="flex flex-col bg-gray-900 text-white justify-center items-center pl-16">
            <div className="flex d-flex p-5">
                <div className="flex flex-col w-96 p-4 space-y-2">
                    <h1 className="text-2xl font-bold text-white ">VKV School</h1>
                    <p className="text-gray-300">Committed to providing quality education and nurturing young minds since 1995.</p>
                </div>
                <div className="flex flex-col w-72  p-4 text-gray-300 space-y-2">
                    <h1 className="text-xl font-bold text-white">Quick Links</h1>
                    <Link to="/" className="hover:text-blue-300">Home</Link>
                    <Link to="/about" className="hover:text-blue-300">About Us</Link>
                    <Link to="/academics" className="hover:text-blue-300">Academics</Link>
                    <Link to="/admission" className="hover:text-blue-300">Admissions</Link>
                    <Link to="/facilities" className="hover:text-blue-300">Facilities</Link>
                </div>
                <div className="flex flex-col w-72 p-4 text-gray-300 space-y-2">
                    <h1 className="text-xl font-bold text-white">Resources</h1>
                    <Link to="/library" className="hover:text-blue-300">Library</Link>
                    <Link to="/events" className="hover:text-blue-300">Events</Link>
                    <Link to="/news" className="hover:text-blue-300">News</Link>
                </div>
                <div className="flex flex-col w-96 p-4 text-gray-300 space-y-2">
                    <h1 className="text-xl font-bold text-white">Contact Us</h1>
                    <p>VKV School,Bargolai, Ledo, Assam </p>
                    <p>Phone: +91 9977888146</p>
                    <p>Email: info@vkvschool.edu</p>
                </div>
            </div>
            <hr className="w-1/2 h-0.5 mb-2 bg-gray-600"/>
            <div>
                <h1 className="text-sm text-gray-200 mb-2">© 2023 VKV School. All rights reserved by ImRaj.</h1>
            </div>
        </div>
    )
}

export default Footer;