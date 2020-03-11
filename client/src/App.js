// import React from "react";
// import axios from "axios"

// CLASSIC VERSION
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
// HOOKS VERSION
// import React, { useState, useEffect} from "react";
// import axios from "axios";
// import { CircularProgress } from '@material-ui/core';
// import "./App.css"
// const App = () => {
//   // creates a state for kittens
//   // and a method to set state for kittens
//   const [kittens, setKittens] = useState()
//   // mimics componentDidMount (){}
//   // make api calls
//   useEffect(() => {
//     getAllKittens()
//   }, [])
  

//   // function to make an api call to the backend
//   // then sets the kitten state to the data we get in our database
//   const getAllKittens = async () => {
//     const response = await axios("/api/kittens")
//     const { data } = await response
//     setKittens(data)
//   }

//   // function to show all the kittens on the page
//   // loops through the state of kittens
//   // for each kitten creates a li element 
//   //    has a key of the id, id of index and content of name 
//   const showMeAllKittens = () => {
//     return kittens.map((kitten, index) => {
//       return (
//         <li key={kitten._id}id={index}>{kitten.name}</li>
//       )
//     })
//   }
  
  
//   return (
//     <div className="App">
//       <ul className="kittens">
//         {kittens === undefined ? <CircularProgress /> : showMeAllKittens()}
//       </ul>
//     </div>
//   );
// }
// ternary statement to handle when state is undefined
//    -  this means that we're loading the kittens
// When there are kittens show them

// export default App;


// ========================================================

// GLOBAL STATE

import React from 'react'
import { KittenProvider } from "./utils/globalState"
import KittenContainer from "./containers/KittenContainer"

export default function App() {  
  return (
    <KittenProvider>
      <div id="App">
        <KittenContainer/>
      </div>
    </KittenProvider>
  )
}
