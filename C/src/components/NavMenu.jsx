import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom' ; 
import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/Login'


function NavMenu() {
      const userParams = useLocation();
      
  return (
    <>
      <nav>
              <ul id='menuList' className='list-none flex p-4'>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/login">login</Link>
                </li>
               
              </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home title={Home.name} />} />
            <Route path="/about" element={<About title={userParams.pathname.slice(1)} />} />
            <Route path="/login" element={<Login title={userParams.pathname.slice(1)} />} />
          </Routes>
    </>
  )
}

export default NavMenu