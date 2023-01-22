import React, {useState} from "react";
import axios from 'axios';


// using axios to get  ==================================================

// function App() {
//   const [joke, setJoke] = useState('')

//   const getJoke = () =>{
//     axios
//     .get('https://official-joke-api.appspot.com/random_joke')
//     .then( (response) => {
//       console.log(response);
//       setJoke(response.data.setup + " ... " + response.data.punchline);
//     })
//   }
  
//   return (
//     <div className="App">
//      <button onClick={getJoke}>Hit to get a jok</button><br />
//      <h2>{joke}</h2>
//     </div>
//   );
// }

//using fetch to get data ===================================================

function App() {
  const [joke, setJoke] = useState('')

  const getJoke = () =>{
    
     fetch('https://official-joke-api.appspot.com/random_joke')
    .then( (response) =>  response.json())
    .then((data) => {
      setJoke(data.setup + " ... " + data.punchline);
    });
  };
  
  return (
    <div className="App">
     <button onClick={getJoke}>Hit to get a jok</button><br />
     <h2>{joke}</h2>
    </div>
  );
}

export default App;
