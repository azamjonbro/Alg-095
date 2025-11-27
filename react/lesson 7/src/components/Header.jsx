import React from 'react'

function Header() {
  return (
    <header className='header'>
        <div className="container header-container">
            <div className="logobox">
                <a href="#">
                    <img src="https://picsum.photos/id/120/100/80" alt="it's logo" loading='lazy' />
                </a>
            </div>
                <nav className="navbar">
                    <a href="#">item1</a>
                    <a href="#">item2</a>
                    <a href="#">item3</a>
                    <a href="#">item4</a>
                </nav>
                <div className="buttonbox">
                    <button className="login">Login</button>
                </div>
        </div>

    </header>
  )
}

export default Header