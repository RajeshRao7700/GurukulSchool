// function Home(){
//     return(
//         <div>
//             <h1>This is Home Page</h1>
//         </div>
//     )
// }



import { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then(res => res.text())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h1>React Home Page</h1>
      <p>{data}</p>
    </div>
  );
}

export default Home;