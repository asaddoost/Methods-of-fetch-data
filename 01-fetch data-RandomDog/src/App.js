import React, { useState, useEffect} from "react";

const URL = 'https://random.dog/woof.json';

const getRandomDog = async () => {
  const response = await fetch(URL);

  const body = await response.json();

  return body.url;
};


function App() {
  const [url, setUrl] = useState(null);

  const onClickHandler = async() => {
    const url = await getRandomDog();

    setUrl(url);
  };

  useEffect(() => {
    onClickHandler();
  }, []);

  return (
    <div className="App">
    <button onClick={onClickHandler}>See Random Dog</button>
    <div>
      <img src={url} />
    </div>
    </div>
  );
}

export default App;
