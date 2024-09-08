import React from 'react'
import './Home.css'

import { useNavigate } from 'react-router-dom'

function Home() {
  let navigate=useNavigate();
  function registerPlace(){
    navigate('register');
  }


  return (
    <div className='home'>
      <div className='mt-5 first'>
        <div className='mt-3 p-4 ms-4 '>
          <h1 className='display-2'>Your Next Chapter</h1>
          <h1 className="display-6 mt-2">Starts Here</h1>
          <button className="btn btn-dark mt-3 fs-5" onClick={registerPlace}>Register Now</button>
        </div> 
        <img className='p-2 mx-auto' src="https://media.licdn.com/dms/image/C5112AQGLtwsEpeEfqQ/article-cover_image-shrink_600_2000/0/1520114095302?e=2147483647&v=beta&t=V_y8ANhHF0F8oqb9oWR-snzGz4L_FYTuD6P5sSaXBrU" alt="" />
      </div> 
      <h1 className='display-4 m-5'>Flats</h1>
      <div className="flats mt-3">
        <img className='ms-2 me-2 mb-2' src="https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2019/12/04164807/Space-saving-Ideas-for-Small-Flats-Enclosed-Balcony.jpg" alt="" />
        <img className='ms-2 me-2 mb-2' src="https://5.imimg.com/data5/CX/TL/MY-40169806/flat-interior.png" alt="" />
        <img className='ms-2 me-2 mb-2' src="https://pix10.agoda.net/hotelImages/32826434/-1/b8bf5380f7b817f38dac1f843060506d.jpg?ce=0&s=414x232&ar=16x9" alt="" />
        <img className='ms-2 me-2 mb-2' src="https://assets.architecturaldigest.in/photos/60084c4a1b516d492c3ab2c3/16:9/w_2560%2Cc_limit/Kochi-3-bhk-apartment-studio-nirvana-feature-1366x768.jpg" alt="" />
        <img src="https://www.hotels-in-pune.net/data/Pics/OriginalPhoto/11582/1158263/1158263823/pic-elegant-suite-with-indoor-swimming-pool-near-pune-6.JPEG" alt="" className="ms-2 me-2 mb-2" />
        <img src="https://img.freepik.com/free-photo/cozy-living-room-modern-apartment_181624-58445.jpg" alt="" className="ms-2 me-2 mb-2" />
      </div>
    </div>
  )
}

export default Home