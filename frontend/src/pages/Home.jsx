import React from 'react'
import HeaderSection from '../components/HeaderSection'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
       <HeaderSection/>
       <SpecialityMenu/>
       <TopDoctors/>
       <Banner/>
    </div>
  )
}

export default Home