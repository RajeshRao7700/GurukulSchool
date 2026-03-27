import {Banner, Card, DetailCard} from "../components/Card";


const bangal = [
    {title:"Gallery", desc:"Moments That Define Our Journey"}
]

const galCard = [
    {title: "Our Photo Gallery", desc:"Explore the vibrant life at Greenfield School through our photo gallery. From academic achievements to sports victories and cultural celebrations, witness the moments that make us proud."}
]

const gallery = () =>{
    return(
        <div>
            {bangal.map((ban,index)=>
            <Banner key={index} title={ban.title} desc={ban.desc}/>)}

          
            {galCard.map((detail,index)=>
                <DetailCard key={index} title={detail.title} desc={detail.desc}/>
            )}
          
           
        </div>
    )
}


export default gallery;