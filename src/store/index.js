import React, { createContext, useReducer } from 'react'



const initialState = {
  popular:[]
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_POPULAR':
      return { popular: action.payload.popular }
    default:
      return state
  }
}

export const Store = createContext({
  globalState: initialState,
  setGlobalstate: () => null
})


export function StoreProvider({children}) {
  const [ globalState, setGlobalstate] = useReducer(reducer, initialState)
  return (
    <Store.Provider value={{ globalState, setGlobalstate }}>{children}</Store.Provider>
  )
}


