import { Banner, DetailCard } from "../components/Card";
import Footer from "../components/Footer";

const banAcad = [
    {title:"Academics", desc:"Excellence in Education"}
]

const acadDetails = [
    {
        title:"Our Curriculum",
        desc:"We follow the CBSE curriculum with a focus on holistic development. Our teaching methodology combines traditional values with modern educational practices to ensure comprehensive learning."
    }]

const Academics = () =>{
    return(
        <div>
            {banAcad.map((ban,index)=>
            <Banner key={index} title={ban.title} desc={ban.desc}/>)}

            {acadDetails.map((detail,index)=>
            <DetailCard key={index} title={detail.title} desc={detail.desc}/>)}
            
        </div>
    )
}

export default Academics;