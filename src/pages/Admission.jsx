import { Banner, Card, DetailCard, TwoXlCard } from "../components/Card";
import Footer from "../components/Footer";

const AddCard =[
    { title: "Application Period", date: "January - March 2026" },
    { title: "Important Dates", date: "April - June 2026" },
    { title: "Admission Requirements", date: "July - September 2026" },
    { title: "Enrollment Process", date: "October - December 2026" 

    }
]

const AddBan =[
    {title: "Admissions", desc: "Join VKV School for a Bright Future!"}
]

const addDetail = [
    {title: "Admissions Open for Academic Year 2026-27", desc: "We welcome admissions for Classes I to XI. Limited seats available. Apply now to secure your child's future in a nurturing learning environment."},  
]

const addTwoxlCard = [
    {number:"1",title:"Inquiry & Registration", desc:"Fill the online inquiry form or visit the school office"},
    {number:"2",title:"Application Submission", desc:"Submit the completed application form with required documents"},
    {number:"3",title:"Interaction Session", desc:"Student interaction and parent meeting with the admission committee"},
    {number:"4",title:"Admission Confirmation", desc:"Fee payment and completion of admission formalities"}
]
const Admission = () =>{
    return (
        <div>
            {AddBan.map((ban, index)=>
            <Banner key={index} title={ban.title} desc={ban.desc}/>)}

            {addDetail.map((detail,index)=>
            <DetailCard
            key={index}
            title={detail.title}
            desc={detail.desc}
             />)}
           
        <div className="flex d-flex gap-4 p-4 justify-center items-center">
           
            {AddCard.map((card, index)=>
                <Card key ={index}
                
                title={card.title}
                date={card.date}
                />
            )}
        </div>

        <div className="flex flex-col w-full h-72  justify-center items-center">
            
                <h1 className="text-4xl font-bold">Admission Process</h1>
                <div className="flex d-flex justify-center items-center w-full h-64 gap-4 ">
                {addTwoxlCard.map((twoxlcard, index)=>
                <TwoXlCard key={index}
                number={twoxlcard.number}
                title={twoxlcard.title}
                desc={twoxlcard.desc}/>
                )}
                </div>
        </div>
        
        </div>
    )
}

export default Admission;