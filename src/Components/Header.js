import { Bars3Icon} from '@heroicons/react/24/solid'
import { useState } from 'react' 
import { Link } from 'react-router-dom';
export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return <header className="flex justify-between items-center px-3 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <Link className="font-bold text-lg" to="/">PRADEEP RESUME</Link>
            <nav className="hidden md:block">
                <ul className="flex space-x-16">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/education">Education</Link></li>
                    <li><Link to="/service">Service</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
             {toggleMenu && <nav className="block md:hidden ">
                <ul className="flex flex-col  mobile-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/education">Education</Link></li>
                    <li><Link to="/service">Service</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>}
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
        {/* <Link to="/login" className='hidden md:block bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200'> Login</Link> */}
    </header>
}
