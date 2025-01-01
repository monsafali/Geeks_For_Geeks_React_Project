// import React, { useEffect, useState } from "react";

// function App() {
//   const [data, setData] = useState([]);

//   function FetchJokeApi() {
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await fetch(
//             "https://sv443.net/jokeapi/v2/joke/Programming?type=single"
//           );
//           const jsonData = await response.json();
//           setData(jsonData);
//         } catch (error) {
//           console.log("Error accur in fetching data", error);
//         }
//       };
//       fetchData();
//     }, [FetchJokeApi]);
//   }

//   return (
//     <>
//       <h1>Joke Generator using React and Joke Api</h1>
//       <p>{data.joke}</p>

//       <button onClick={FetchJokeApi}>Click To generate a joke</button>
//     </>
//   );
// }

// export default App;
import React, { useState } from "react";

function App() {
  const [data, setData] = useState(null);

  const fetchJokeApi = async () => {
    try {
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/Programming?type=single"
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log("Error occurred while fetching data:", error);
    }
  };

  return (
    <div className="m-auto border border-red-400 max-w-[800px] text-center p-4">
      <h className="font-bold text-3xl">
        Joke Generator using React and Joke API
      </h>
      <p>{data?.joke || "Click the button to generate a joke!"}</p>
      <button className="bg-green-400 p-4 rounded-lg" onClick={fetchJokeApi}>
        Click to generate a joke
      </button>
    </div>
  );
}

export default App;
