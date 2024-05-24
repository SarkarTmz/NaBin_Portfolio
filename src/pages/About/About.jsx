import React from 'react'
import logo from '../../images/logo.jpg'

const About = () => {
  return (
    <div className="about">
      <div className="about__wrapper">
        <div className="intro flex gap-5">
          <div className="intro__img">
            <img src={logo} alt="" />
          </div>
          <div className="intro__dis w-1/2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, vero eius. Laborum ad in nesciunt saepe deserunt obcaecati, nobis ducimus minima tenetur suscipit accusantium cupiditate voluptas eveniet repudiandae mollitia assumenda!
            Magni dicta provident accusamus sed quasi nobis esse asperiores doloremque totam voluptates repellat vero atque aut voluptate quae consequatur veritatis deleniti voluptatibus numquam beatae, reprehenderit fuga. Sunt excepturi corporis ut?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About