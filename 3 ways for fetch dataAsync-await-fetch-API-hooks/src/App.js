import React, {useState, useEffect} from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

function App() {

  const [data, setData] = useState([])

// Method 1  with fetch===============================
// useEffect(() => {
//   loadData();
// }, [])

  // const loadData = () =>{
  //   fetch(URL)
  //   .then(response => response.json())
  //   .then(receivedData => setData(receivedData))
  // }


  //method 2  with async await==============================

  // useEffect(() => {
  //   loadData();
  // }, [])

  // const loadData = async () =>{
  //   await fetch(URL)
  //   .then(response => response.json())
  //   .then(receivedData => setData(receivedData))
  // }


  // method 3  ==============================================


  useEffect(() => {

    getData();

  }, [])

      async function getData() {
      const api = `https://jsonplaceholder.typicode.com/users`;
      const result = await fetch(api);
      const getResult = await result.json();
      setData(getResult);
      
      console.log(getResult)
    }
    

  return (
    <div className="App">
    {data.map(item => (
      <p key={item.id}>{item.name}</p>
    ))}
    </div>
  );
}

export default App;
