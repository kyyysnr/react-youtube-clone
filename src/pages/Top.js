import React, { useEffect, useContext } from 'react'
import Layout from '../components/layout/Layout'
import { fetchPopularData } from '../apis/index'
import { Store } from '../store/index'

function Top() {
  const { globalState, setGlobalState } = useContext(Store) 
  useEffect(()=>{
    fetchPopularData().then((res) => {
      console.log('data',res)
      setGlobalState({type: 'SET_POPULAR', payload: {popular: res.data.items}})})
  },[])
  return (
    <div>
      <Layout>
        top page
      </Layout>
      
    </div>
  )
}

export default Top
