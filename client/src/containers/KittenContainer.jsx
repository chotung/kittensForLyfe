import React, { useEffect } from 'react'
import axios from "axios";
import KittenCard from "../components/KittenCard"
import { useKittenContext } from "../utils/globalState"
import { CircularProgress } from '@material-ui/core';


export default function KittenContainer() {
  
  const [state, dispatch] = useKittenContext()

  useEffect(() => {
 
    getAllKittens()
  }, [])

  // function to make an api call to the backend
  // then sets the kitten state to the data we get in our database
  const getAllKittens = async () => {
    const response = await axios("/api/kittens")
    const { data } = await response

    const kittyAction = {
      type: "GET_KITTENS",
      payload: data
    }
    // payload is just data
    dispatch(kittyAction)
  }

  const showMeAllKittens = () => {
    return state.kitties.map((kitten, index) => {
      return (
        <KittenCard key={kitten._id} id={index} name={kitten.name} />
      )
    })
  }

  return (
    <div>
      {state.kitties === undefined ? <CircularProgress /> : showMeAllKittens()}
    </div>
  )
}
