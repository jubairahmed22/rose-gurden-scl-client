import React from 'react'
import Spinner from '../../Components/Spinner/Spinner'
import TextRolling from './TextRolling/TextRolling'
import HomeSlider from './TextRolling/HomeSlider/HomeSlider'
import HomeOthers from './HomeOthers/HomeOthers'
import './Hom.css'
import Footer from '../Shared/Footer'

const Home = () => {
  return (
    <>
       <div className='bgColor'>
       <TextRolling></TextRolling>
       <HomeSlider></HomeSlider>
       <HomeOthers></HomeOthers>
       <Footer></Footer>
       </div>
    </>
  )
}

export default Home
