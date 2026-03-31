export const Card = (props) =>{
    return(
       
        <div className="flex flex-col border items-center justify-center border-gray-300 rounded-md shadow-md w-64 h-24 hover:scale-105 hover:shadow-lg transition duration-300">
            <img></img>
            <h1 className="font-semibold">{props.title}</h1>
            <p className="text-sm text-gray-600">{props.date}</p>
        </div>
        
    )

}

export const Banner =(props) =>{
    return(
        <div className="flex flex-col justify-center items-center bg-gradient-to-r from-blue-800 to-green-400 h-64 mb-10 ">
                <h1 className="text-5xl font-bold text-white ">{props.title}</h1>
                <p className="text-white text-xl font-semibold">{props.desc}</p>
        </div>
    )
}

export const DetailCard = (props) =>{
    return(
        <div className="flex flex-col justify-center items-center p-4 w-2/3 mx-auto space-y-10 mb-10">
            <h1 className="text-4xl font-bold text-gray-900">{props.title}</h1>
            <p className="text-xl text-gray-600 text-center">{props.desc}</p>

        </div>

    )
}


export const TwoXlCard = (props) =>{
    return(
        
            
                <div className="flex flex-col w-80 h-full justify-center items-center border-gray-300 rounded-md shadow-md p-8 hover:scale-105 hover:shadow-lg transition duration-300 space-y-2">
                    <h1 className="flex justify-center text-2xl w-16 h-16 bg-blue-500 rounded-full text-white text-bold text-center items-center">{props.number}</h1>
                    <h1 className="text-xl font-semibold text-center">{props.title}</h1>
                    <p className="text-sm text-gray-500 text-center">{props.desc}</p>
                </div>
            
    
    )


}

export const LeadCard = (props) =>{
    return(
        <div className="flex flex-col w-60 h-52 items-center justify-center">
            <h1 className="flex justify-center text-white font-bold text-xl items-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-green-500 mb-5">{props.title}</h1>
            <h1 className="text-xl font-bold">{props.name}</h1>
            <h1 className="text-blue-700 font-bold mb-3">{props.des}</h1>
            <p className="text-sm text-gray-700">{props.edu}</p>

        </div>
    )
}