import React from 'react'
import './Footer.css'
import youtube_img from '../../assets/youtube_icon.png'
import instagram_img from '../../assets/instagram_icon.png'
import facebook_img from '../../assets/facebook_icon.png'
import twitter_img from '../../assets/twitter_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook_img} alt="" />
        <img src={instagram_img} alt="" />
        <img src={twitter_img} alt="" />
        <img src={youtube_img} alt="" />
      </div>
        <ul>
          <li>Audio Discription</li>
          <li>Help Center</li>
          <li>Gift Cards</li>
          <li>Media Center</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Terms And Use</li>
          <li>Privacy</li>
          <li>Legal Notices</li>
          <li>Cookies Preference</li>
          <li>Contect Us</li>
          <li>Corprate Information</li>
        <p className='copyright-text'>Netflix-Clone by Praveen Raghav</p>

        </ul>
    </div>
  )
}

export default Footer
