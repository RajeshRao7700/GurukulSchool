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


import React, { useState } from "react";

const photosData = [
  {
    id: 1,
    url: "https://via.placeholder.com/300",
    category: "sports",
  },
  {
    id: 2,
    url: "https://via.placeholder.com/300",
    category: "annual",
  },
  {
    id: 3,
    url: "https://via.placeholder.com/300",
    category: "sports",
  },
  {
    id: 4,
    url: "https://via.placeholder.com/300",
    category: "cultural",
  },
  {
    id: 5,
    url: "https://via.placeholder.com/300",
    category: "annual",
  },
];

const Gallery = () => {
  const [filter, setFilter] = useState("all");

  const filteredPhotos =
    filter === "all"
      ? photosData
      : photosData.filter((photo) => photo.category === filter);

  return (
    <div style={{ padding: "20px" }}>
      {/* Tabs */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("sports")}>Sports</button>
        <button onClick={() => setFilter("annual")}>Annual Function</button>
        <button onClick={() => setFilter("cultural")}>Cultural</button>
      </div>

      {/* Gallery */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "15px",
        }}
      >
        {filteredPhotos.map((photo) => (
          <img
            key={photo.id}
            src={photo.url}
            alt={photo.category}
            style={{ width: "100%", borderRadius: "8px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;