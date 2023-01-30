import React from 'react'

const Navbar = () => {
  return (
    <div className='navigation-page'>

    <div className='navigation-bar'>


        <div className='navigation-logo'></div>

        <div className='navigation-pages'>
          <a href='#'>   <span className='navigation-home'>HOME</span></a>
          <a href='#'>   <span className='navigation-books'>BOOKS</span></a>
          <a href='#'>   <span className='navigation-about'>ABOUT</span></a>
          <a href='#'>   <span className='navigation-contact'>CONTACT</span></a>
        </div>

      <div className='navigation-user'>

      <a href='#'>   <span className='navigation-auth'><i class="fa-regular fa-user"></i></span> </a>
      <a href='#'> <span className='navigation-shop'><i class="fa-solid fa-cart-plus"></i></span></a>
     
      </div>


   <hr></hr>
    </div>


    
    </div>
    
  )
}

export default Navbar