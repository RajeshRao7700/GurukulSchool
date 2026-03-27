import { Banner, Card, DetailCard } from "../components/Card";
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
       
        </div>
    );
}

export default Contactus