import React from 'react'
import Video from '../components/home/Video'
import HomeTopText from '../components/home/HomeTopText'
import HomeBottomText from '../components/home/HomeBottomText'
const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed '>
<Video/>
      </div>
      <div className='h-screen w-full relative flex flex-col justify-between overflow-hidden'>
<HomeTopText/>
<HomeBottomText/>
      </div>
    </div>
  )
}

export default Home