import React from 'react'
import logo from '../../images/logo.jpg'

const Home = () => {
  return (
    <div className="home">
      <div className="home__wrapper flex flex-col items-center">
        <div className="img">
          <img src={logo} alt="Nabin" />
        </div>
        <div className="dis">
          <h1 className='text-3xl font-extrabold text-center'>HELLO I AM NABIN</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iste est, doloribus perferendis fugit sit a voluptas perspiciatis, unde consequatur necessitatibus, beatae molestiae eligendi tempore? Veritatis odio nam deleniti blanditiis?
          Excepturi asperiores, voluptatem  vero dolor asperiores, aliquam qui vel non dicta culpa ex placeat quis nemo temporibus. Fuga asperiores accusamus in perferendis, maiores cupiditate error temporibus?
          Recusandae eius officiis culpa? Animi aut esse cumque maxime eius, quia facilis exercitationem asperiores amet atque? Hic pariatur, porro nulla blanditiis culpa nemo, deserunt velit eaque libero veniam iusto assumenda.</p>
        </div>
      </div>
    </div>
  )
}

export default Home