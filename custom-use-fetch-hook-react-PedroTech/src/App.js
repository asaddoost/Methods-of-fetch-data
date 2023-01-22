import useFetch from "./useFetch";

function App() {
  // if we want to change the name of data with : + add new word for Example data to joke
  const { data: joke, loading, error, refetch } = useFetch(
    "https://v2.jokeapi.dev/joke/Any"
  );

  if (loading) return <h1> LOADING...</h1>;

  if (error) console.log(error);

  return (
    <div className="App">
      <h>
        {joke?.setup} : {joke?.delivery}
      </h>

      <button onClick={refetch}> Refetch</button>
    </div>
  );
}

export default App;
