import Navbar from "../components/Navbar";

function About(){
    return(
        <div>
            <div className="h-[calc(100vh-8rem)] w-full">
            <div className="h-full w-full" style={{
    backgroundImage: `linear-gradient(rgba(30,58,138,0.85), rgba(21,128,61,0.85)), url('https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=1200')`
  }}>

                <div className="flex flex-col items-center justify-center text-center py-20 px-4">
                    <h1 className="text-6xl text-white font-bold mb-4">Welcome to VKV School</h1>
                    <h1 className="text-xl text-white font-semibold mb-4">Nurturing Excellence, Building Character, Shaping Future Leaders</h1>
                    <div className="flex d-flex gap-4">
                     <button className="bg-blue-400 rounded-xl px-4 py-2 text-white fond-bold">Apply Now</button>
                     <button className="bg-white rounded-xl px-4 py-2 text-blue-600">Learn More</button>
                    </div>
                </div>
                
            
            </div>

            </div>
            <div className="flex flex-col justify-center items-center text-center py-20 px-4 h-screen w-full">
            <h1 className="text-4xl font-bold">About VKV School</h1>
            <p>
                VKV School is a premier educational institution dedicated to providing holistic education. With state-of-the-art facilities and experienced faculty, we nurture young minds to become responsible global citizens. Our curriculum balances academic excellence with character development, ensuring students are well-prepared for the challenges of tomorrow.
            </p>

            </div>
        </div>
    )
}

export default About;