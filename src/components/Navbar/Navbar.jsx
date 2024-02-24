import * as React from 'react'
import { Link,useLocation  } from 'react-router-dom';
import { ProviderContext } from '../../context/Provider';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate()
  const {auth, setAuth} = React.useContext(ProviderContext)
  const menuStyle = 'px-10 py-5 text-center text-white'
  const location = useLocation();
  const currentPath = location.pathname;

  const menuList = [
    {
      url: '/',
      label: 'Home'
    },
    {
      url: '/events',
      label: 'Events'
    },
  
    {
      url: auth ? '/resident' : '/about',
      label: auth ? 'Resident' : 'About Us'
    },
    {
      url: auth ? '/zoneLeader' : '/contact',
      label: auth ? 'Zone Leader' : 'Contact'
    },
    {
      url: auth ? '/admin' : '/login',
      label: auth ? "Admin" : "Login"
    }, 
  ]

  const handleAuth = () => {
    setAuth(!auth)
    navigate('/')
  }

  return (
    <div>
      <nav className='flex items-center gap-2 bg-zinc-800'>
        <div className='px-2' onClick={handleAuth}> LOGO HERE </div>
        <div className='mx-auto'>
        <ul className='flex items-center justify-between w-full'>
          {
            menuList.map(menu => {
              return (
                <li key={menu.label}  className={`${menuStyle} ${menu.url == currentPath ? 'bg-zinc-900' : '' }`}>
                  <Link to={`${menu.url}`}>{menu.label}</Link>
                </li>
              )
            })
          }
       
        </ul>
        </div>
        
      </nav>
    </div>
  )
}

export default Navbar