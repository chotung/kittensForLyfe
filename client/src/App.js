import React from "react";
import axios from "axios"


class App extends React.Component {

  state = {
    kittens: []
  }
  componentDidMount() {
    this.getAllKittens()
  }

  getAllKittens = async () => {
    const response = await axios("/api/kittens")
    const { data } = await response
    this.setState({
      kittens:data
    })
  }
  
  
  showMeAllKittens = () => {
    return  this.state.kittens.map((kitten, index) => {
      return (
        <li key={kitten._id}id={index}>{kitten.name}</li>
      )
    })
  }
  


  render() {
    console.log(this.state)
    return (
      <div className="App">
        <ul className="kittens">
        {this.showMeAllKittens()}
        </ul>
      </div>
    )
  }
}

export default App;
