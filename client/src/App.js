// import React from "react";
import axios from "axios"


// class App extends React.Component {

//   state = {
//     kittens: []
//   }
//   componentDidMount() {
//     this.getAllKittens()
//   }

//   getAllKittens = async () => {
//     const response = await axios("/api/kittens")
//     const { data } = await response
//     this.setState({
//       kittens:data
//     })
//   }
  
//   showMeAllKittens = () => {
//     return  this.state.kittens.map((kitten, index) => {
//       return (
//         <li key={kitten._id}id={index}>{kitten.name}</li>
//       )
//     })
//   }
  
//   render() {
//     console.log(this.state)
//     return (
//       <div className="App">
//         <ul className="kittens">
//         {this.showMeAllKittens()}
//         </ul>
//       </div>
//     )
//   }
// }

// export default App;
//=========================================================

import React, { useState, useEffect} from "react";

const App = () => {

  const [kittens, setKittens] = useState()

  useEffect(() => {
    getAllKittens()
  }, [])
  
  const getAllKittens = async () => {
    const response = await axios("/api/kittens")
    const { data } = await response
    setKittens({
      kittens: data
    })
  }

  
  const showMeAllKittens = () => {
    // WE're not getting kittens
    return kittens.kittens.map((kitten, index) => {
      return (
        <li key={kitten._id}id={index}>{kitten.name}</li>
      )
    })
  }
  
  
  return (
    <div>
      <ul className="kittens">
        {kittens === undefined ? "Loading..." : showMeAllKittens()}
      </ul>
    </div>
  );
}

export default App;

// context + useReducer 
// WRAP WHOLE APP