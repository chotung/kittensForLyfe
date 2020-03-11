import React, { useContext, useReducer, createContext } from 'react'


// Create a new context from useContext Hook
// Extract the Provider component from the kittenContext
const kittenContext = createContext()
const { Provider } = kittenContext

// Setting up reducer to pass to the useReducer hook
const reducer = (state, action) => {
  switch (action.type) {  
    case "GET_KITTENS":
      return {
        ...state,
        kitties:action.payload
      }
    default:
      return state
  }
}
// Custom Provider to give the state from the reducer to all the children components
const KittenProvider = ({value={}, ...props}) => {  
  // state, dispatch from the useReducer hook
  const [state, dispatch] = useReducer(reducer, {
    user: [{
      name: "Chocolate Charlie"
    }, {
      name: "Vanilla Charlie"
    },
    {
      name: "Strawberry Charlie"
    }]
  })

  return <Provider value={[state,dispatch]} {...props}/>
  // Create a provider component with the value of the state and dispatch method
  // return the provider
}

// Create a custom useContext Hook
const useKittenContext = () => {
  return useContext(kittenContext)
}


export { useKittenContext,  KittenProvider}

