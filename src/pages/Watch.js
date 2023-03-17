import React from 'react'
import Layout from '../components/layout/Layout'
import VideoDetail from '../components/VideoDetail/VideoDetail'
import SideList from '../components/SideList/SideList'

function Watch() {
  return (
    <div>
      <Layout>
        <VideoDetail />
        <SideList />
      </Layout>
      
    </div>
  )
}

export default Watch
