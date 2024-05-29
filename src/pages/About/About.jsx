import React from 'react'
import logo from '../../images/logo.jpg'
import './About.css'

const About = () => {
  return (
    <div className="about">
      <div className="about__wrapper">

        <div className="intro">
          <div className="intro__img">
            <img src={logo} alt="" />
          </div>
          <div className="intro__dis">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, vero eius. Laborum ad in nesciunt saepe deserunt obcaecati, nobis ducimus minima tenetur suscipit accusantium cupiditate voluptas eveniet repudiandae mollitia assumenda!
            Magni dicta provident accusamus sed quasi nobis esse asperiores doloremque totam voluptates repellat vero atque aut voluptate quae consequatur veritatis deleniti voluptatibus numquam beatae, reprehenderit fuga. Sunt excepturi corporis ut?</p>
          </div>
        </div>

        <div className="skill">
          <h1 className='mt-5 text-lg font-semibold'>Skills</h1>
          <div className="skill__wrapper">
            <div className="skill__card">
              <img src={logo} alt="" />
              <p>Graphics Dsiner</p>
            </div>
            <div className="skill__card">
              <img src={logo} alt="" />
              <p>Graphics Dsiner</p>
            </div>
            <div className="skill__card">
              <img src={logo} alt="" />
              <p>Graphics Dsiner</p>
            </div>
            
            <div className="skill__card">
              <img src={logo} alt="" />
              <p>Graphics Dsiner</p>
            </div>
            
            <div className="skill__card">
              <img src={logo} alt="" />
              <p>Graphics Dsiner</p>
            </div>
            
            <div className="skill__card">
              <img src={logo} alt="" />
              <p>Graphics Dsiner</p>
            </div>
            
          </div>

          
        </div>


        <div className="skill">
          <h1 className='mt-5 text-lg font-semibold'>Skills</h1>
          <div className="skill__wrapper">
            <div className="skill__card">
              <img src={logo} alt="" />
              <p>Graphics Dsiner</p>
            </div>
            <div className="skill__card">
              <img src={logo} alt="" />
              <p>Graphics Dsiner</p>
            </div>
            <div className="skill__card">
              <img src={logo} alt="" />
              <p>Graphics Dsiner</p>
            </div>
            
            <div className="skill__card">
              <img src={logo} alt="" />
              <p>Graphics Dsiner</p>
            </div>
            
            <div className="skill__card">
              <img src={logo} alt="" />
              <p>Graphics Dsiner</p>
            </div>
            
            <div className="skill__card">
              <img src={logo} alt="" />
              <p>Graphics Dsiner</p>
            </div>
            
          </div>

          
        </div>




      </div>
    </div>
  )
}

export default About