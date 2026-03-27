import { Banner, DetailCard } from "../components/Card";
import Footer from "../components/Footer";

const banFac = [
    {title:"Facilities", desc:"Our facilities are designed to provide a safe and stimulating environment for our students to learn and grow."}
]

const facDetail = [
    {title: "Our Infrastructure", desc:"We believe that a conducive learning environment is essential for student success. Our campus is designed to provide the best facilities that support academic excellence and overall development."}
]
function Facilities(){
    return(
        <div>
            {banFac.map((ban,index)=>
            <Banner key={index} title={ban.title} desc={ban.desc}/>)}

            {facDetail.map((detail, index)=>
            <DetailCard key={index} title={detail.title} desc={detail.desc}/>)}
           
        </div>

    )
}

export default Facilities;