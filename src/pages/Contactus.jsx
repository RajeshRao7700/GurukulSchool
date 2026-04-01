import { Banner, Card, DetailCard } from "../components/Card";
import { useState } from "react";
import Footer from "../components/Footer";

const bancont = [
    {title:"Contact Us", desc:"We would love to hear from you"}
]

const contactDetails = [
    {title:"We'd Love to Hear From You", desc:"Have questions about admissions, academics, or any other aspect of our school? Our team is here to help. Reach out to us and we'll get back to you as soon as possible."}
]

const cardContact = [
    {title:"Address", date:"Vkv school, Bargolai,ledo,Assam"},
    {title:"Phone", date:"+91 9977888146"},
    {title:"Email", date:"raorajesh7700@gmail.com"},
    {title:"Office Hours", date:"Monday - Friday: 8:00 AM - 4:00 PM"}
]
const Contactus = () => {

     const [formData, setFormData] = useState({
        name: "",
        phone: ""
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:8080/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setMessage("Query submitted successfully ✅");
                setFormData({ name: "", phone: "" });
            } else {
                setMessage("Something went wrong ❌");
            }

        } catch (error) {
            console.error(error);
            setMessage("Server error ❌");
        }
    };
    return(
        <div>
            {bancont.map((ban,index)=>
            <Banner key={index} title={ban.title} desc={ban.desc}/>)}
            

            {contactDetails.map((detail,index)=>
            <DetailCard key={index} title={detail.title} desc={detail.desc}/>)}

            <div className="flex d-flex gap-4 p-4 justify-center items-center">
            {cardContact.map((card,index)=>
            <Card key={index} title={card.title} date={card.date}/>)}
            </div>

            <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
            
            <h2 className="text-2xl font-bold mb-4 text-center">
                Send Us Your Queries
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border p-3 rounded-md"
                    required
                />

                <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border p-3 rounded-md"
                    required
                />

                <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 rounded-md"
                >
                    Submit
                </button>

            </form>

            {message && <p className="mt-4 text-center">{message}</p>}
        </div>
        </div>
    );
}

export default Contactus;