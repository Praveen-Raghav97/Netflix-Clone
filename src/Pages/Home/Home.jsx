import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import banner_img from '../../assets/hero_banner.jpg'
import title_img from '../../assets/hero_title.png'
import play_img from '../../assets/play_icon.png'
import info_img from '../../assets/info_icon.png'
import TitleCards from '../../Components/TitleCards/TitleCards'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={banner_img} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={title_img} alt="" className='caption-img' />
          <p>Discovering his ties to a secrete ancient order, a young
            man living in modern Istanbul embarks on a quest to save the city
            from an importal enemy.
          </p>
          <div className="hero-btns">
            <button className='btn'><img src={play_img} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_img} alt="" />More Info</button>
          </div>
          <TitleCards/>
        </div>

      </div>
     <div className="more-cards">
     <TitleCards title={"Blockbuster Movies"}  category ={"top_rated"}/>
     <TitleCards title={"Only For Netflix"} category ={"popular"}/>
     <TitleCards title={"Uncomming"} category ={"upcoming"}/>
     <TitleCards title={"Top Pics For You"} category ={"now_playing"}/>
     </div>
      <Footer/>
    </div>
  )
}

export default Home
